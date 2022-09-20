import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './global.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './Features/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


