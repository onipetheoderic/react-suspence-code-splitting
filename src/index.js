import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CheckConnection from './CheckConnection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CheckConnection>
      <App />
    </CheckConnection>
  </React.StrictMode>
);

