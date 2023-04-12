import { randNumber } from '@ngneat/falso'
import { describe, it, expect } from 'vitest'

import { testFunc } from '../testFunc'

describe('testFunc', () => {
  it('SHOULD calc 5 and 6', () => {
    const a = randNumber()
    const b = randNumber()

    const sum = a + b

    expect(testFunc(a, b)).toBe(sum)
  })
})
