import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import App from './App';
import {Provider} from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <div className="App h-screen">
    <App/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
