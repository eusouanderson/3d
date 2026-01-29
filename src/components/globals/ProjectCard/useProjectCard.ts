import type { CardProject } from './interface'

export const useProjectCard = () => {
  const cards: CardProject[] = [
    {
      id: 1,
      title: 'Espaço Futurista',
      description: 'Ambiente 3D futurista com arquitetura moderna e iluminação dinâmica.',
      category: 'Ambiente',
      image: 'https://images.unsplash.com/photo-1639762681033-6461ffad8d80?w=400',
      price: 149.99,
      downloads: '2.5K',
      rating: 4.8,
      featured: true,
    },
    {
      id: 2,
      title: 'Personagem Animado',
      description: 'Modelo 3D de personagem totalmente rigged e pronto para animação.',
      category: 'Personagem',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6cb?w=400',
      price: 199.99,
      downloads: '1.8K',
      rating: 4.9,
      featured: false,
    },
    {
      id: 3,
      title: 'Cena Sci-Fi',
      description: 'Cena completa com naves, asteroides e efeitos de partículas.',
      category: 'Cena',
      image: 'https://images.unsplash.com/photo-1592833159156-c2a09b9d3a3b?w=400',
      price: 249.99,
      downloads: '3.2K',
      rating: 4.7,
      featured: true,
    },
  ]

  return {
    cards,
  }
}
