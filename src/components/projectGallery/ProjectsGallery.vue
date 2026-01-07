<template>
  <section class="projects-gallery">
    <div class="gallery-container">
      <div class="gallery-header">
        <span class="section-badge">💎 Portfólio</span>
        <h2 class="section-title">Projetos 3D em Destaque</h2>
        <p class="section-description">
          Explore nossa coleção exclusiva de modelos 3D de alta qualidade
        </p>
      </div>

      <div class="gallery-filters">
        <button
          v-for="category in categories"
          :key="category"
          :class="['filter-btn', { active: activeCategory === category }]"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="projects-grid">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          @click="handleProjectClick"
        />
      </div>

      <div class="gallery-footer">
        <button class="btn-load-more">
          <span>Carregar Mais Projetos</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '../projectCard/ProjectCard.vue'
import { useProjectGallery } from './useProjectGallery'

const { activeCategory, categories, handleProjectClick, filteredProjects } = useProjectGallery()
</script>

<style scoped>
.projects-gallery {
  padding: 8rem 2rem;
  background: linear-gradient(180deg, transparent 0%, rgba(102, 126, 234, 0.03) 100%);
}

.gallery-container {
  max-width: 1400px;
  margin: 0 auto;
}

.gallery-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  margin: 0 auto;
}

.gallery-filters {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.filter-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  color: white;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: transparent;
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.gallery-footer {
  display: flex;
  justify-content: center;
}

.btn-load-more {
  padding: 1rem 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.btn-load-more:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .projects-gallery {
    padding: 4rem 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .gallery-filters {
    gap: 0.75rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.8125rem;
  }
}
</style>
