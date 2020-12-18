import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/" hashType="noslash">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
