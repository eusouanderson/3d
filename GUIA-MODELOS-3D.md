# 🎨 Guia de Modelos 3D para o Projeto

## 📥 Onde Baixar Modelos 3D

### ⭐ Recomendados (Gratuitos - GLTF/GLB)

#### 1. **Sketchfab** - https://sketchfab.com
```
✅ Filtros: 
- "Downloadable" ✓
- "Royalty Free" ✓
- Formato: glTF/GLB
📋 Exemplo: https://sketchfab.com/search?q=spaceship&type=models&downloadable=true&license=free
```

#### 2. **Poly Haven** - https://polyhaven.com/models
```
✅ Qualidade: Excelente
✅ Licença: CC0 (Public Domain)
✅ Formato: GLTF/GLB/OBJ
```

#### 3. **TurboSquid Free** - https://www.turbosquid.com/Search/3D-Models/free
```
✅ Filtros: Free Models
✅ Formato: Suporta múltiplos
```

---

## 🚀 Como Usar no Projeto

### Opção 1: URL Direta (Recomendado)
```vue
<script setup>
import Viewer3D from '@/components/globals/3dViewer/Viewer3D.vue'

// URL do modelo GLTF/GLB
const modelUrl = 'https://cdn.example.com/model.glb'
</script>

<template>
  <Viewer3D 
    :model-url="modelUrl"
    :auto-rotate="true"
    :background-color="'#1a1a1a'"
  />
</template>
```

### Opção 2: Arquivo Local
```bash
# 1. Criar pasta de assets
mkdir public/models

# 2. Adicionar arquivo .glb
# Copiar seu modelo para: public/models/meu-modelo.glb

# 3. Usar no componente
<Viewer3D model-url="/models/meu-modelo.glb" />
```

---

## 📦 Exemplos de Modelos Gratuitos Prontos

### Modelos Sketchfab (copie o link de download)
```
🚀 Spaceship: https://sketchfab.com/models/...
🤖 Robot: https://sketchfab.com/models/...
🏠 House: https://sketchfab.com/models/...
```

### URLs para Testar Agora
```javascript
// Modelo de cubo (padrão)
// Usa objeto 3D padrão

// Modelo de estatueta (substitua pela sua URL)
const testModel = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/models/gltf/LittlestTokyo.glb'
```

---

## 🔧 Conversão de Formatos

Se você tem um modelo em outro formato (OBJ, FBX, etc):

### Online (Fácil)
1. Acesse: https://products.aspose.app/3d/conversion
2. Faça upload do arquivo
3. Selecione saída: GLB
4. Download

### Local (com Blender)
```bash
# 1. Instale Blender: https://www.blender.org/
# 2. Abra o arquivo
# 3. File → Export As → glTF Binary (.glb)
```

---

## 💡 Dicas

### ✅ Boas Práticas
- Use **GLB** (binário) para modelos menores
- Use **GLTF** para modelos com múltiplas texturas
- Otimize texturas: máx 4K, melhor 1K-2K
- Comprima modelos: máx 50MB, ideal <10MB

### ⚡ Performance
```vue
<!-- Para modelos pesados -->
<Viewer3D 
  model-url="/models/grande.glb"
  :auto-rotate="false"
  background-color="#000000"
/>
```

---

## 📋 Checklist para Novo Modelo

- [ ] Download em formato GLB
- [ ] Arquivo é menor que 20MB?
- [ ] Está em pasta `public/models/`?
- [ ] URL está correta no componente?
- [ ] Teste no navegador

---

## 🎬 Exemplo Completo

```vue
<script setup lang="ts">
import { ref } from 'vue'
import Viewer3D from '@/components/globals/3dViewer/Viewer3D.vue'

const models = ref({
  spaceship: 'https://cdn.example.com/spaceship.glb',
  robot: '/models/robot.glb',
  house: 'https://sketchfab.com/models/..../download'
})

const selectedModel = ref(models.value.spaceship)
</script>

<template>
  <div class="viewer-wrapper">
    <div class="controls">
      <button 
        v-for="(url, name) in models"
        :key="name"
        @click="selectedModel = url"
        class="btn"
      >
        {{ name }}
      </button>
    </div>
    
    <div class="viewer">
      <Viewer3D 
        :model-url="selectedModel"
        :auto-rotate="true"
      />
    </div>
  </div>
</template>

<style scoped>
.viewer-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.controls {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn:hover {
  background: #764ba2;
}

.viewer {
  width: 100%;
  height: 600px;
  border-radius: 12px;
  overflow: hidden;
}
</style>
```

---

## ❓ Problemas Comuns

| Problema | Solução |
|----------|---------|
| Modelo não aparece | Verificar URL, browser console |
| Modelo muito grande | Usar ferramentas de compressão |
| Modelo invisível | Ajustar `cameraPosition` |
| Carregamento lento | Usar arquivo GLB menor |

---

**Pronto! Agora é só baixar um modelo e renderizar no seu projeto! 🚀**
