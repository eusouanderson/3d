export interface Viewer3DProps {
  modelUrl?: string
  autoRotate?: boolean
  enableControls?: boolean
  backgroundColor?: string
  cameraPosition?: [number, number, number]
  modelColor?: string // Cor do cubo padrão (hexadecimal: '#ff0000')
}

export interface Scene3DConfig {
  width: number
  height: number
  backgroundColor: string
  cameraPosition: [number, number, number]
}
