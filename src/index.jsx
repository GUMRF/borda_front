import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'

import './styles/index.css'

import { Home } from './pages/home';
import { Challenges } from './pages/challenges';
import { Scoreboard } from './pages/scoreboard';
import { FAQ } from './pages/faq';

import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
         <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  let location = useLocation();
  return (
    <>
        {location.pathname !== "/" ? (<Header />) : null}
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/challenges" element={< Challenges />} />
          <Route exact path="/scoreboard" element={< Scoreboard />} />
          <Route exact path="/faq" element={< FAQ />} />
        </Routes>

    </>
  );
}