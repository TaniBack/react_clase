// Aqui se encgancha todo el proyecto con el DOM real (DOM con mundo virtual)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Aqui se llama al compoennte APP que ha importado previamente para renderizarlo 
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* Renderiza App que es el componente PADRE */}
  </React.StrictMode>,
  document.getElementById('root')
  // Renderiza App dentro del componente div del DOM "root"
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// No se debería tocar este documento a menos que pongamos metricas para tracking en la web