import { Text } from 'atoms/Text'
import { useState } from 'react'

import styles from './styles.module.css'

export const App = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className={styles.app}>
      <p data-drafter-id="drafterText">"Drafter Library"</p>
      <Text
        text="Drafter Library Mock Text"
        color="black"
      />

      <p>{counter}</p>

      <button onClick={() => setCounter(counter + 1)}>Click here</button>
    </div>
  )
}
