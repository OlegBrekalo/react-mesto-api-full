import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/" hashType="noslash">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
