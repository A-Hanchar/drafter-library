import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import '@fontsource/baloo-thambi-2'
import 'modern-css-reset'
import './core.css'
import 'atoms/Color'

const root = document.getElementById('root')

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
