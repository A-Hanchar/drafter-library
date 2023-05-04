import { ComponentPropsWithRef, PropsWithChildren, ReactHTML } from 'react'

export type TextTag = keyof Pick<ReactHTML, 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'sub' | 'sup'>

export type TextProps<T extends keyof ReactHTML = TextTag> = ComponentPropsWithRef<T> &
  PropsWithChildren<{
    drafterId: string
    as: T
    className?: string
    weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
    uppercase?: boolean
    size?: '30px' | '24px' | '21px' | '18px' | '16px' | '14px' | '12px' | '10px'
    color?: 'primary' | 'secondary' | 'light' | 'dark' | 'alert' | 'success' | 'warning' | 'inherit' | 'currentColor'
  }>
