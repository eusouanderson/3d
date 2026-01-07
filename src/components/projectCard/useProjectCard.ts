import { ref } from 'vue'
import type { CardProject } from './interface'

export function useProjectCard() {
  const cards = ref<CardProject[]>([
    {
      id: 1,
      title: 'title',
      description: 'description',
      category: 'category',
      image: 'image',
      price: 0,
      downloads: 'downloads',
      rating: 0,
      featured: true,
    },
    {
      id: 2,
      title: 'title',
      description: 'description',
      category: 'category',
      image: 'image',
      price: 0,
      downloads: 'downloads',
      rating: 0,
      featured: true,
    },
    {
      id: 3,
      title: 'title',
      description: 'description',
      category: 'category',
      image: 'image',
      price: 0,
      downloads: 'downloads',
      rating: 0,
      featured: true,
    },
    {
      id: 4,
      title: 'title',
      description: 'description',
      category: 'category',
      image: 'image',
      price: 0,
      downloads: 'downloads',
      rating: 0,
      featured: true,
    },
    {
      id: 5,
      title: 'title',
      description: 'description',
      category: 'category',
      image: 'image',
      price: 0,
      downloads: 'downloads',
      rating: 0,
      featured: true,
    },
    {
      id: 6,
      title: 'title',
      description: 'description',
      category: 'category',
      image: 'image',
      price: 0,
      downloads: 'downloads',
      rating: 0,
      featured: true,
    },
  ])

  return {
    cards,
  }
}
