import { Text } from 'atoms/Text'
import { useState } from 'react'

import styles from './styles.module.css'

export const App = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className={styles.app}>
      <p data-simpler-id="simplerText">"Simpler Lib"</p>
      <Text text="Simpler Lib Mock Text" />

      <p>{counter}</p>

      <button onClick={() => setCounter(counter + 1)}>Click here</button>
    </div>
  )
}
