
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// 1. Choose the container where the root will be mounted
const container = document.getElementById('root');

// 2. Store the root in a global variable to prevent re-creating it on each HMR
if (!window.__root) {
  window.__root = ReactDOM.createRoot(container);
}

// 3. Create a render function
const render = () => {
  window.__root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// 4. Initial render
render();

// 5. HMR acceptance: only re-render on App module reload
if (import.meta.hot) {
  import.meta.hot.accept('./App.jsx', () => {
    render();
  });
}
