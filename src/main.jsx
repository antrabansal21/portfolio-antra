// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const container = document.getElementById('root')

if (!window.__root) {
  window.__root = ReactDOM.createRoot(container)
}

const render = () => {
  window.__root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

render()

if (import.meta.hot) {
  import.meta.hot.accept('./App.jsx', render)
}
