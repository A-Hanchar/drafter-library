import { useLayoutEffect, useRef } from 'react'

export const useLatest = <T>(value: T) => {
  const valueRef = useRef<T>(value)

  useLayoutEffect(() => {
    valueRef.current = value
  }, [value])

  return valueRef
}
