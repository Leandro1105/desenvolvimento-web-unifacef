import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cadastro from './components/Cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const cadastro = ReactDOM.createRoot(document.getElementById('cadastro'));
cadastro.render(
  <React.StrictMode>
    <Cadastro />
  </React.StrictMode>
);

