<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { use3dViewer } from './use3dViewer'
import type { Viewer3DProps } from './interface'

const props = withDefaults(defineProps<Viewer3DProps>(), {
  autoRotate: true,
  enableControls: false,
  backgroundColor: '#1a1a1a',
  cameraPosition: () => [150, 0, 5],
})

const { containerRef, initScene, loadModel, changeModelColor, isLoading, error } = use3dViewer()

onMounted(() => {
  initScene(props)
  
  // Carregar modelo inicial se houver URL
  if (props.modelUrl) {
    loadModel(props.modelUrl)
  }
})

watch(
  () => props.modelUrl,
  (newUrl) => {
    if (newUrl) {
      loadModel(newUrl)
    }
  }
)

// Expor função para mudar cor
defineExpose({
  changeModelColor,
})
</script>

<template>
  <div class="viewer-3d-container">
    <div ref="containerRef" class="viewer-3d-canvas"></div>

    <!-- Loading indicator -->
    <div v-if="isLoading" class="loading-indicator">
      <div class="spinner"></div>
      <p>Carregando modelo...</p>
    </div>

    <!-- Error message -->
    <div v-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<style scoped>
.viewer-3d-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
}

.viewer-3d-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.loading-indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 10;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(102, 126, 234, 0.2);
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-indicator p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.error-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 8px;
  z-index: 10;
  max-width: 80%;
}

.error-message p {
  color: rgba(255, 100, 100, 0.9);
  margin: 0;
  font-size: 0.9rem;
}
</style>
