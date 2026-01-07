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
import { computed, ref } from 'vue'
import ProjectCard from './projectCard/ProjectCard.vue'

interface Project {
  id: number
  title: string
  description: string
  category: string
  image: string
  price: number
  downloads: string
  rating: number
  featured?: boolean
}

const activeCategory = ref('Todos')

const categories = ['Todos', 'Arquitetura', 'Personagens', 'Objetos', 'Veículos', 'Natureza']

// Dados de exemplo - você pode substituir por dados reais
const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Apartamento Moderno',
    description:
      'Design de interiores contemporâneo com detalhes realistas e iluminação profissional.',
    category: 'Arquitetura',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
    price: 299,
    downloads: '2.5k',
    rating: 4.9,
    featured: true,
  },
  {
    id: 2,
    title: 'Personagem Sci-Fi',
    description: 'Modelo de personagem futurista totalmente rigged e pronto para animação.',
    category: 'Personagens',
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&h=600&fit=crop',
    price: 499,
    downloads: '1.8k',
    rating: 5.0,
    featured: true,
  },
  {
    id: 3,
    title: 'Cadeira Designer',
    description: 'Mobília moderna com texturas PBR de alta qualidade e geometria otimizada.',
    category: 'Objetos',
    image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&h=600&fit=crop',
    price: 149,
    downloads: '3.2k',
    rating: 4.8,
  },
  {
    id: 4,
    title: 'Carro Esportivo',
    description: 'Veículo de alto desempenho com interior detalhado e materiais realistas.',
    category: 'Veículos',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
    price: 599,
    downloads: '4.1k',
    rating: 4.9,
  },
  {
    id: 5,
    title: 'Floresta Tropical',
    description: 'Ambiente completo com vegetação realista e assets modulares.',
    category: 'Natureza',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=600&fit=crop',
    price: 399,
    downloads: '2.9k',
    rating: 4.7,
  },
  {
    id: 6,
    title: 'Edifício Comercial',
    description: 'Arquitetura comercial moderna com sistema modular de fachada.',
    category: 'Arquitetura',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    price: 449,
    downloads: '1.6k',
    rating: 4.8,
  },
])

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Todos') {
    return projects.value
  }
  return projects.value.filter((p) => p.category === activeCategory.value)
})

const handleProjectClick = (project: Project) => {
  console.log('Project clicked:', project)
  // Aqui você pode adicionar navegação ou modal
}
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
