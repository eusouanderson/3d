# Estrutura do Projeto 3D

## 📁 Organização

```
src/
├── components/
│   ├── globals/              # Componentes globais reutilizáveis
│   │   ├── 3dViewer/        # Componente de visualização 3D com Three.js
│   │   │   ├── Viewer3D.vue
│   │   │   ├── interface.ts
│   │   │   └── use3dViewer.ts
│   │   └── ProjectCard/     # Componente de card de projetos
│   │       ├── ProjectCard.vue
│   │       ├── interface.ts
│   │       └── useProjectCard.ts
│   ├── ctaSection/          # Seção de chamada à ação
│   ├── featureSection/      # Seção de recursos
│   ├── heroProject/         # Seção herói
│   └── projectGallery/      # Galeria de projetos
```

## 🎨 Componentes

### Viewer3D
Componente de visualização 3D que renderiza um modelo tridimensional usando Three.js.

**Props:**
- `modelUrl?: string` - URL do modelo 3D
- `autoRotate?: boolean` - Rotação automática (padrão: true)
- `enableControls?: boolean` - Habilitar controles de câmera
- `backgroundColor?: string` - Cor de fundo
- `cameraPosition?: [number, number, number]` - Posição da câmera

**Exemplo de uso:**
```vue
<script setup>
import Viewer3D from '@/components/globals/3dViewer/Viewer3D.vue'
</script>

<template>
  <Viewer3D 
    :auto-rotate="true"
    :background-color="'#1a1a1a'"
    :camera-position="[0, 0, 5]"
  />
</template>
```

### ProjectCard
Componente que exibe uma galeria de cards de projetos com opção de visualização 3D.

**Props:**
- `showViewer?: boolean` - Mostrar viewer 3D nos cards

**Eventos:**
- `click` - Emitido quando um card é clicado

**Exemplo de uso:**
```vue
<script setup>
import ProjectCard from '@/components/globals/ProjectCard/ProjectCard.vue'

const handleCardClick = (project) => {
  console.log('Projeto clicado:', project)
}
</script>

<template>
  <ProjectCard 
    :show-viewer="true"
    @click="handleCardClick"
  />
</template>
```

## 🚀 Getting Started

### Instalação
```bash
pnpm install
```

### Desenvolvimento
```bash
pnpm run dev
```

### Build
```bash
pnpm run build
```

## 📦 Dependências

- **Vue 3.5.26** - Framework frontend
- **Three.js 0.182.0** - Biblioteca 3D
- **Vue Router 4.6.4** - Roteamento
- **Tailwind CSS 4.1.18** - Utilitários CSS
- **TypeScript 5.9.3** - Tipagem estática

## 🎯 Próximos Passos

1. **Carregar Modelos 3D**
   - Adicionar suporte para formatos gltf/glb
   - Integrar loader de modelos

2. **Controles Avançados**
   - Implementar OrbitControls
   - Adicionar gestos touch

3. **Otimizações**
   - Lazy loading de modelos
   - Progressive enhancement

## 📝 Notas

- Todos os componentes estão em `src/components/globals/`
- Use TypeScript para melhor type safety
- Organize novos componentes em pastas com: `Component.vue`, `interface.ts`, `useComponent.ts`
