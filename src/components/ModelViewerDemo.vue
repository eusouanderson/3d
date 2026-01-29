<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import Viewer3D from '@/components/globals/3dViewer/Viewer3D.vue'

// Modelos disponíveis
const models = {
  acura: {
    name: 'Acura NSX',
    url: '/src/assets/3d/uploads_files_6780228_Acura+NSX.glb',
  },
  gtr: {
    name: 'Nissan GTR 35',
    url: '/src/assets/3d/uploads_files_5744368_GTR+35.glb',
  },
}

const selectedModel = ref(models.acura.url)
const selectedName = ref(models.acura.name)
const viewerKey = ref(0)
const viewerRef = ref()
const selectedColor = ref('#ff0000')

// Cores predefinidas para o carro
const colors = [
  { name: 'Vermelho', hex: '#ff0000' },
  { name: 'Azul', hex: '#0066ff' },
  { name: 'Preto', hex: '#000000' },
  { name: 'Branco', hex: '#ffffff' },
  { name: 'Amarelo', hex: '#ffff00' },
  { name: 'Verde', hex: '#00ff00' },
  { name: 'Rosa', hex: '#ff00ff' },
  { name: 'Laranja', hex: '#ff6600' },
]

const selectModel = (model: keyof typeof models) => {
  selectedModel.value = models[model].url
  selectedName.value = models[model].name
  // Forçar re-render do viewer quando trocar de modelo
  viewerKey.value++
}

const changeCarColor = (color: string) => {
  selectedColor.value = color
  if (viewerRef.value) {
    viewerRef.value.changeModelColor(color)
  }
}
</script>

<template>
  <div class="model-viewer-page">
    <div class="container">
      <h1 class="title">Visualizador 3D Interativo</h1>
      <p class="subtitle">Explore modelos 3D em tempo real com rotação automática</p>

      <!-- Controles de Modelo -->
      <div class="controls">
        <button
          v-for="(model, key) in models"
          :key="key"
          @click="selectModel(key as keyof typeof models)"
          :class="['btn-model', { active: selectedModel === model.url }]"
        >
          {{ model.name }}
        </button>
      </div>

      <!-- Viewer 3D -->
      <div class="viewer-wrapper">
        <div class="viewer-info">
          <h2>{{ selectedName }}</h2>
          <p>Rotação automática ativada</p>
        </div>
        <div class="viewer">
          <Viewer3D
            ref="viewerRef"
            :key="viewerKey"
            :model-url="selectedModel"
            :auto-rotate="true"
            :background-color="'#1a1a2e'"
            :camera-position="[0, -0.3, 3]"
          />
        </div>

        <!-- Controles de Cor -->
        <div class="color-controls">
          <h3>Escolha a cor do carro:</h3>
          <div class="color-palette">
            <button
              v-for="color in colors"
              :key="color.hex"
              @click="changeCarColor(color.hex)"
              :class="['color-btn', { active: selectedColor === color.hex }]"
              :style="{ backgroundColor: color.hex }"
              :title="color.name"
            >
              <span v-if="selectedColor === color.hex" class="check">✓</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Instruções -->
      <div class="instructions">
        <h3>💡 Dicas</h3>
        <ul>
          <li>Clique nos botões acima para trocar de modelo</li>
          <li>O modelo carregará automaticamente</li>
          <li>Rotação automática está ativada</li>
          <li>Ambos os modelos são GLB (formato otimizado)</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.model-viewer-page {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 3rem;
  font-size: 1.1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn-model {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(102, 126, 234, 0.3);
  color: white;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-model:hover {
  background: rgba(102, 126, 234, 0.1);
  border-color: rgba(102, 126, 234, 0.6);
  transform: translateY(-2px);
}

.btn-model.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: transparent;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.viewer-wrapper {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 3rem;
}

.color-controls {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.color-controls h3 {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
}

.color-palette {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.color-btn {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.color-btn:hover {
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.1);
  box-shadow: 0 0 20px currentColor;
}

.color-btn.active {
  border-color: white;
  box-shadow: 0 0 20px currentColor, inset 0 0 10px rgba(255, 255, 255, 0.3);
}

.color-btn .check {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
}

.viewer-info {
  margin-bottom: 1.5rem;
  text-align: center;
}

.viewer-info h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
}

.viewer-info p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.viewer {
  width: 100%;
  height: 500px;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.5), rgba(10, 10, 15, 0.8));
  box-shadow: inset 0 0 30px rgba(102, 126, 234, 0.1);
}

.instructions {
  background: rgba(102, 126, 234, 0.08);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 16px;
  padding: 2rem;
}

.instructions h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #667eea;
}

.instructions ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.instructions li {
  color: rgba(255, 255, 255, 0.75);
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  font-size: 0.95rem;
}

.instructions li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

@media (max-width: 768px) {
  .model-viewer-page {
    padding: 3rem 1rem;
  }

  .title {
    font-size: 1.75rem;
  }

  .viewer {
    height: 350px;
  }

  .controls {
    flex-direction: column;
  }

  .btn-model {
    width: 100%;
  }

  .viewer-wrapper {
    padding: 1rem;
  }
}
</style>
