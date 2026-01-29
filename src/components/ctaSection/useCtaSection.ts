import { ref } from 'vue'

export function useCtaSection() {
  const state = ref(null)

  const getParticleStyle = (index: number) => {
    const delay = (index * 0.3) % 5
    const duration = 3 + Math.random() * 4
    const x = (index * 27) % 100
    const y = (index * 43) % 100

    return {
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      top: `${y}%`,
      left: `${x}%`,
    }
  }

  return {
    getParticleStyle,
    state,
  }
}
