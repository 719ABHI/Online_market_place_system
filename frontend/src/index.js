import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Welcome.css'; // Import the index.css file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);