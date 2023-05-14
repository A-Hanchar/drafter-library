import { useCallback, useState } from 'react'

import { useIsMounted } from './useIsMounted'

export const useSafeState = <T>(initilValue: T) => {
  const [state, setState] = useState<T>(initilValue)
  const isMounted = useIsMounted()

  const updateState = useCallback(
    (newValue: T) => {
      if (isMounted.current) {
        setState(newValue)
      }
    },
    [isMounted],
  )

  return [state, updateState]
}
