import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux';

ReactDOM.render(
  <React.StrictMode>
    <div className="App h-screen">
      <Provider store = {store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
