import { describe, it, expect } from 'vitest'

import { testFunc } from '../testFunc'

describe('testFunc', () => {
  it('SHOULD calc 5 and 6', () => {
    expect(testFunc(5, 6)).toBe(11)
  })
})
