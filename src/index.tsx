import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header'
import { GlobalStyles } from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
