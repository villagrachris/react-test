import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './components/apps1.jsx'
import App2 from './components/apps2.jsx'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <App1 />
    <App2 />
  </React.StrictMode>,
  document.getElementById('root')
);

