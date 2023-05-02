import { ColorDemo, ColorDemoType } from './ColorDemo'

interface ColorGroupType {
  title: string
  colors: ColorDemoType[]
}

export const ColorGroup = ({ title, colors }: ColorGroupType) => (
  <div>
    <h2 style={{ fontSize: '2rem' }}>{title}</h2>

    <div style={{ display: 'flex', gap: '1rem' }}>{colors.map(ColorDemo)}</div>
  </div>
)
