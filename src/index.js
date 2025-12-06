import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ИЗМЕНИТЕ С "root" НА "movie-widget"
const root = ReactDOM.createRoot(document.getElementById('movie-widget'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);