import { Text } from 'atoms/Text'

import styles from './styles.module.css'

export const App = () => (
  <div className={styles.app}>
    <p>"Simpler Lib"</p>
    <Text text="Simpler Lib Mock Text" />
  </div>
)
