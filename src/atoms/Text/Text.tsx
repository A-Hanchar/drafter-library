import cx from 'classnames'
import { ForwardedRef, ReactHTML, createElement, forwardRef } from 'react'

import styles from './styles.module.css'

import { TextProps, TextTag } from './types'

export const Text = forwardRef(
  <T extends keyof ReactHTML = TextTag>(
    { drafterId, as, className, uppercase, color, size, weight, children, ...restTextProps }: TextProps<T>,
    ref: ForwardedRef<T>,
  ) =>
    createElement(
      as,
      {
        ref,
        'data-drafter-id': drafterId,
        className: cx('ui-text', {
          [styles[`color-${color}`]]: color,
          [styles[`weight-${weight}`]]: weight,
          [styles[`size-${size}`]]: size,
          [styles.uppercase]: uppercase,
          className,
        }),
        ...restTextProps,
      },
      children,
    ),
)
