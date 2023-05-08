import { describe, expect, it } from 'vitest'

import { disableControl } from '../'

describe('disableControl', () => {
  it('SHOULD return correct object', () => {
    expect(disableControl()).toStrictEqual({ control: false })
  })
})
