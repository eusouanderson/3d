<template>
  <div class="project-cards">
    <div class="project-card" v-for="card in cards" :key="card.id" @click="handleClick(card)">
      <div class="card-image">
        <img :src="card.image" :alt="card.title" />

        <div class="card-overlay">
          <button class="view-btn">Ver Detalhes</button>
        </div>

        <div class="card-badge" v-if="card.featured">
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
              {{ card.downloads }}
            </span>

            <span class="meta-item">
              {{ card.rating }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CardProject } from './interface'
import { useProjectCard } from './useProjectCard'

const emit = defineEmits<{
  click: [project: CardProject]
}>()

const { cards } = useProjectCard()

const handleClick = (project: CardProject) => {
  alert('Project clicked: ' + project.title)
}
</script>

<style scoped>
.project-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  position: relative;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
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

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .card-image img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.view-btn {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  transform: translateY(10px);
}

.project-card:hover .view-btn {
  transform: translateY(0);
}

.view-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.card-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 215, 0, 0.9);
  color: #000;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
}

.card-content {
  padding: 1.5rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.3;
}

.card-category {
  padding: 0.25rem 0.75rem;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 6px;
  font-size: 0.75rem;
  color: #a5b4fc;
  white-space: nowrap;
}

.card-description {
  font-size: 0.875rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.card-price {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}

.price-value {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.price-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
}

.card-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
}

.meta-item svg {
  color: rgba(255, 255, 255, 0.4);
}

@media (max-width: 768px) {
  .card-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .card-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}
</style>
