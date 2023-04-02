import { TextProps } from './types'

export const Text = ({ text, color = 'black', fontSize = '1rem' }: TextProps) => (
  <p style={{ color, fontSize }}>{text}</p>
)
