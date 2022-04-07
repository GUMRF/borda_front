import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'

import './styles/index.css'

import { Home } from './pages/home';
import { Challanges } from './pages/challanges';
import { Scoreboard } from './pages/scoreboard';
import { FAQ } from './pages/faq';

import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/challanges" element={< Challanges />} />
          <Route exact path="/scoreboard" element={< Scoreboard />} />
          <Route exact path="/faq" element={< FAQ />} />
        </Routes>
      </Router>
    </>
  );
}