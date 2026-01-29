<script setup lang="ts">
import Viewer3D from '../3dViewer/Viewer3D.vue'
import type { CardProject } from './interface'
import { useProjectCard } from './useProjectCard'

const emit = defineEmits<{
  click: [project: CardProject]
}>()

const props = defineProps<{
  showViewer?: boolean
}>()

const { cards } = useProjectCard()

const handleClick = (project: CardProject) => {
  emit('click', project)
}

const handleViewDetails = (e: Event, project: CardProject) => {
  e.stopPropagation()
  handleClick(project)
}
</script>

<template>
  <div class="project-cards">
    <div
      v-for="card in cards"
      :key="card.id"
      class="project-card"
      @click="handleClick(card)"
    >
      <div class="card-image">
        <!-- Mostrar viewer 3D ou imagem -->
        <div v-if="props.showViewer" class="card-viewer">
          <Viewer3D
            :auto-rotate="true"
            :background-color="'#0a0a0a'"
            :camera-position="[0, 0, 5]"
          />
        </div>
        <img v-else :src="card.image" :alt="card.title" class="card-img" />

        <div class="card-overlay">
          <button class="view-btn" @click="handleViewDetails($event, card)">
            Ver Detalhes
          </button>
        </div>

        <div v-if="card.featured" class="card-badge">
          <span>⭐ Destaque</span>
        </div>
      </div>

      <div class="card-content">
        <div class="card-header">
          <h3 class="card-title">{{ card.title }}</h3>
          <span class="card-category">{{ card.category }}</span>
        </div>

        <p class="card-description">
          {{ card.description }}
        </p>

        <div class="card-footer">
          <div class="card-price">
            <span class="price-value">R$ {{ card.price }}</span>
            <span class="price-label">/ projeto</span>
          </div>

          <div class="card-meta">
            <span class="meta-item">
              📥 {{ card.downloads }}
            </span>

            <span class="meta-item">
              ⭐ {{ card.rating }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
}

.project-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  position: relative;
  display: flex;
  flex-direction: column;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(102, 126, 234, 0.3);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
}

.project-card:hover::before {
  opacity: 1;
}

.card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
}

.card-viewer {
  width: 100%;
  height: 100%;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .card-img {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.view-btn {
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.view-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.5);
}

.card-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  z-index: 3;
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-header {
  margin-bottom: 0.75rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin: 0 0 0.5rem 0;
}

.card-category {
  display: inline-block;
  font-size: 0.85rem;
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
  padding: 4px 12px;
  border-radius: 6px;
}

.card-description {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 1rem 0;
  flex: 1;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
}

.card-price {
  display: flex;
  flex-direction: column;
}

.price-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
}

.price-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

.card-meta {
  display: flex;
  gap: 1rem;
}

.meta-item {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .project-cards {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .card-image {
    aspect-ratio: 4/3;
  }
}
</style>
