import { useCallback } from 'react'

type Ref<T> = React.MutableRefObject<T> | React.RefCallback<T> | null | undefined

export const useCombinedRef = <T>(...refs: Ref<T>[]) => {
  const combinedRef = useCallback(
    (element: T) => {
      refs.forEach((ref) => {
        if (!ref) return

        if (typeof ref === 'function') {
          ref(element)
        } else {
          ref.current = element
        }
      })
    },
    [refs],
  )

  return combinedRef
}
