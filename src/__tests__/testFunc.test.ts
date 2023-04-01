import { describe, expect, it } from 'vitest'

import { testFunc } from './../testFunc'

describe('testFunc', () => {
  it('SHOULD return a sum of one', () => {
    const sum = testFunc(1, 1)

    expect(sum).toBe(2)
  })
})
