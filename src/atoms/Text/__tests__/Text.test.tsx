import { randText, randUuid } from '@ngneat/falso'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Text } from '../'
import { TextProps, TextTag } from '../types'

describe('<Text />', () => {
  const drafterId = randUuid()

  const defaultProps: TextProps = {
    as: 'p',
    drafterId,
  }

  const renderTextComponent = (props?: Partial<TextProps>) =>
    render(
      <Text
        {...defaultProps}
        {...props}
      >
        {randText()}
      </Text>,
    )

  it('SHOULD render component', () => {
    renderTextComponent()

    expect(screen.getByTestId(drafterId)).toBeInTheDocument()
  })

  describe('check tag name', () => {
    it('SHOULD render correct tag')

    it.each<{ tag: TextTag }>([{ tag: 'h1' }, { tag: 'p' }, { tag: 'span' }, { tag: 'sub' }])(
      'SHOULD render correct tag - $tag',
      ({ tag }) => {
        const { getByTestId } = renderTextComponent({ as: tag })

        expect(getByTestId(drafterId).tagName.toLowerCase()).toBe(tag)
      },
    )
  })

  describe('check css classes', () => {
    it('SHOULD NOT render classes for color, weight, size, uppercase IF they are undefined', () => {
      const { getByTestId } = renderTextComponent()

      expect(getByTestId(drafterId).className).not.toContain('color-')
      expect(getByTestId(drafterId).className).not.toContain('weight-')
      expect(getByTestId(drafterId).className).not.toContain('size-')
      expect(getByTestId(drafterId).className).not.toContain('uppercase')
    })

    it('SHOULD render component with color IF color is not undefined', () => {
      const { getByTestId } = renderTextComponent({ color: 'alert' })

      expect(getByTestId(drafterId)).toHaveClass('color-alert')
    })

    it('SHOULD render component with weight IF weight is not undefined', () => {
      const { getByTestId } = renderTextComponent({ weight: '900' })

      expect(getByTestId(drafterId)).toHaveClass('weight-900')
    })

    it('SHOULD render component with size IF size is not undefined', () => {
      const { getByTestId } = renderTextComponent({ size: '21px' })

      expect(getByTestId(drafterId)).toHaveClass('size-21px')
    })

    it('SHOULD render component with uppercase IF uppercase is not undefined', () => {
      const { getByTestId } = renderTextComponent({ uppercase: true })

      expect(getByTestId(drafterId)).toHaveClass('uppercase')
    })
  })
})
