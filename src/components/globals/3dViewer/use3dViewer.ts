import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { onMounted, onUnmounted, ref, shallowRef } from 'vue'
import type { Viewer3DProps } from './interface'

export const use3dViewer = () => {
  const containerRef = ref<HTMLDivElement | null>(null)
  const scene = shallowRef<THREE.Scene | null>(null)
  const camera = shallowRef<THREE.PerspectiveCamera | null>(null)
  const renderer = shallowRef<THREE.WebGLRenderer | null>(null)
  const animationId = ref<number | null>(null)
  const model = shallowRef<THREE.Object3D | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const initScene = (props: Viewer3DProps) => {
    if (!containerRef.value) return

    // Prevenir múltiplas inicializações
    if (renderer.value) {
      console.warn('Renderer já existe, pulando inicialização')
      return
    }

    const width = containerRef.value.clientWidth
    const height = containerRef.value.clientHeight

    try {
      // Criar cena
      scene.value = new THREE.Scene()
      scene.value.background = new THREE.Color(props.backgroundColor || '#1a1a1a')

      // Criar câmera
      camera.value = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
      const [x, y, z] = props.cameraPosition || [0, 0, 5]
      camera.value.position.set(x, y, z)

      // Criar renderer com tratamento de erro
      renderer.value = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        failIfMajorPerformanceCaveat: false
      })
      renderer.value.setSize(width, height)
      renderer.value.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      containerRef.value.appendChild(renderer.value.domElement)
    } catch (err) {
      error.value = 'Erro ao criar contexto WebGL. Seu navegador pode não suportar WebGL.'
      console.error('WebGL Error:', err)
      return
    }

    // Adicionar iluminação
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.value.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 10, 10)
    scene.value.add(directionalLight)

    // Só criar cubo padrão se não houver modelo para carregar
    if (!props.modelUrl) {
      const geometry = new THREE.BoxGeometry()
      // Usar cor customizada ou padrão verde
      const colorValue = props.modelColor ? parseInt(props.modelColor.replace('#', ''), 16) : 0x00ff88
      const material = new THREE.MeshPhongMaterial({
        color: colorValue,
        emissive: 0x004d33,
      })
      const cube = new THREE.Mesh(geometry, material)
      model.value = cube
      scene.value.add(cube)
    }

    // Animação
    const animate = () => {
      animationId.value = requestAnimationFrame(animate)

      if (props.autoRotate && model.value) {
        // Rotação apenas no eixo Y (vertical) para girar o carro horizontalmente
        model.value.rotation.y += 0.01
      }

      renderer.value?.render(scene.value!, camera.value!)
    }

    animate()
  }

  const handleWindowResize = () => {
    if (!containerRef.value || !camera.value || !renderer.value) return

    const width = containerRef.value.clientWidth
    const height = containerRef.value.clientHeight

    camera.value.aspect = width / height
    camera.value.updateProjectionMatrix()
    renderer.value.setSize(width, height)
  }

  const cleanup = () => {
    if (animationId.value) {
      cancelAnimationFrame(animationId.value)
    }

    if (containerRef.value && renderer.value) {
      containerRef.value.removeChild(renderer.value.domElement)
    }

    renderer.value?.dispose()
  }

  onMounted(() => {
    window.addEventListener('resize', handleWindowResize)
  })

  onUnmounted(() => {
    cleanup()
    window.removeEventListener('resize', handleWindowResize)
  })

  const loadModel = async (url: string) => {
    if (!scene.value) return

    isLoading.value = true
    error.value = null

    try {
      const loader = new GLTFLoader()

      loader.load(
        url,
        (gltf) => {
          // Remover modelo anterior
          if (model.value) {
            scene.value?.remove(model.value)
          }

          const newModel = gltf.scene
          model.value = newModel

          // Calcular bounding box
          const box = new THREE.Box3().setFromObject(newModel)
          const size = box.getSize(new THREE.Vector3())
          const center = box.getCenter(new THREE.Vector3())

          // Centralizar modelo na origem
          newModel.position.x = -center.x
          newModel.position.y = -center.y
          newModel.position.z = -center.z

          // Ajustar escala para caber na cena
          const maxDim = Math.max(size.x, size.y, size.z)
          const scale = 3 / maxDim
          newModel.scale.setScalar(scale)

          // Inclinar a frente do veículo para baixo (rotação no eixo X)
          newModel.rotation.x = 0.15

          scene.value?.add(newModel)
          isLoading.value = false
        },
        (progress) => {
          console.log('Carregamento:', (progress.loaded / progress.total) * 100 + '%')
        },
        (err) => {
          isLoading.value = false
          console.error('Erro de carregamento:', err)
        }
      )
    } catch (err) {
      error.value = `Erro: ${err instanceof Error ? err.message : 'Unknown error'}`
      isLoading.value = false
    }
  }

  const changeModelColor = (colorHex: string) => {
    if (!model.value) return

    try {
      // Converter cor hex para número
      const color = parseInt(colorHex.replace('#', ''), 16)

      // Aplicar cor a todos os meshes do modelo
      model.value.traverse((child: any) => {
        if (child.isMesh && child.material) {
          child.material.color.setHex(color)
        }
      })
    } catch (err) {
      console.error('Erro ao mudar cor:', err)
    }
  }

  return {
    containerRef,
    scene,
    camera,
    renderer,
    model,
    isLoading,
    error,
    initScene,
    loadModel,
    changeModelColor,
    cleanup,
  }
}
