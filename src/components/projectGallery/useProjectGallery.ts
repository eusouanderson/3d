import type { Project } from '@/components/projectGallery/interface'
import { computed, ref } from 'vue'

export function useProjectGallery() {
  const state = ref(null)

  const activeCategory = ref('Todos')

  const categories = ref(['Todos', 'Arquitetura', 'Personagens', 'Objetos', 'Veículos', 'Natureza'])

  const handleProjectClick = (project: Project) => {
    console.log('Project clicked:', project)
  }

  const filteredProjects = computed(() => {
    if (activeCategory.value === 'Todos') {
      return projects.value
    }
    return projects.value.filter((p) => p.category === activeCategory.value)
  })

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

  return {
    filteredProjects,
    activeCategory,
    categories,
    state,
    projects,
    handleProjectClick,
  }
}
