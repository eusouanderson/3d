import { ref } from 'vue'
import type { Feature } from './inteface'

export function useFeatureSection() {
  const features = ref<Feature[]>([
    {
      id: 1,
      icon: '🎨',
      title: 'Design Premium',
      description:
        'Modelos 3D criados por profissionais com atenção aos mínimos detalhes e texturas de alta qualidade.',
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Otimização Perfeita',
      description:
        'Arquivos otimizados para melhor desempenho sem perder qualidade visual em seus projetos.',
    },
    {
      id: 3,
      icon: '🔧',
      title: 'Fácil Customização',
      description:
        'Modelos totalmente editáveis e prontos para personalização conforme suas necessidades.',
    },
    {
      id: 4,
      icon: '📦',
      title: 'Múltiplos Formatos',
      description: 'Disponível nos formatos mais populares: OBJ, FBX, GLB, GLTF e muito mais.',
    },
    {
      id: 5,
      icon: '💎',
      title: 'Licença Comercial',
      description: 'Use em projetos comerciais sem preocupações. Licença vitalícia incluída.',
    },
    {
      id: 6,
      icon: '🚀',
      title: 'Suporte Dedicado',
      description: 'Equipe pronta para ajudar você a tirar o máximo proveito dos seus projetos 3D.',
    },
  ])

  return {
    features,
  }
}
