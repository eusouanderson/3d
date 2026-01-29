// Componentes Globais
export { default as Viewer3D } from './3dViewer/Viewer3D.vue'
export { default as ProjectCard } from './ProjectCard/ProjectCard.vue'

// Types
export type { Scene3DConfig, Viewer3DProps } from './3dViewer/interface'
export type { CardProject } from './ProjectCard/interface'

// Composables
export { use3dViewer } from './3dViewer/use3dViewer'
export { useProjectCard } from './ProjectCard/useProjectCard'

