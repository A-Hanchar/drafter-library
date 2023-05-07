import { DetailedHTMLProps, HTMLAttributes, ReactHTMLElement } from 'react'

import { TagName } from './TagName'

export type GenericHTMLElement<T extends TagName> = JSX.IntrinsicElements[T] extends DetailedHTMLProps<
  HTMLAttributes<infer E>,
  infer E
>
  ? E
  : ReactHTMLElement<HTMLElement>
