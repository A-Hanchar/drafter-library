import { PropsWithChildren } from 'react'
import { GenericHTMLElement } from 'types'

export type TextTag = keyof Pick<
  JSX.IntrinsicElements,
  'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'sub' | 'sup'
>

export type TextSize = '30px' | '24px' | '21px' | '18px' | '16px' | '14px' | '12px' | '10px'

export type TextProps<T extends TextTag = TextTag> = PropsWithChildren<{
  drafterId: string
  as: T
  className?: string
  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  uppercase?: boolean
  size?: TextSize
  color?: 'primary' | 'secondary' | 'light' | 'dark' | 'alert' | 'success' | 'warning' | 'inherit' | 'currentColor'
  ref?: React.Ref<GenericHTMLElement<T>>
}>
