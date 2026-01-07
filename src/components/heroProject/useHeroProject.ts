import type { HeroStat } from '@/components/heroProject/interface'
import { ref } from 'vue'

export function useHeroProject() {
  const states = ref<HeroStat[]>([
    { id: 1, value: 120, suffix: '+', label: 'Projetos' },
    { id: 2, value: 15, suffix: 'k+', label: 'Downloads' },
    { id: 3, value: 4.9, suffix: '★', label: 'Avaliação' },
    { id: 4, value: 100, suffix: '%', label: 'Satisfação' },
  ])

  return {
    states,
  }
}
