import clsx from 'clsx'
import { createElement } from 'react'

import styles from './styles.module.css'

import { TextProps, TextTag } from './types'

export const Text = <T extends TextTag>({
  drafterId,
  as,
  className,
  uppercase,
  color,
  size,
  weight,
  children,
  ref,
  ...restTextProps
}: TextProps<T>) =>
  createElement(
    as,
    {
      'data-drafter-id': drafterId,
      className: clsx(
        'ui-text',
        Boolean(color) && styles[`color-${color}`],
        Boolean(weight) && styles[`weight-${weight}`],
        Boolean(size) && styles[`size-${size}`],
        Boolean(uppercase) && styles.uppercase,
        className,
      ),
      ref,
      ...restTextProps,
    },
    children,
  )
