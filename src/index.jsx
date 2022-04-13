import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'

import './styles/index.css'

import { Home } from './pages/home';
import { Challenges } from './pages/challenges';
import { Scoreboard } from './pages/scoreboard';
import { FAQ } from './pages/faq';
import { SignIn } from './pages/sign-in'
import { Registration } from './pages/registration'
import { SignOut } from './pages/sign-out'

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
      {location.pathname !== "/sign-in" && location.pathname !=="/registration" && location.pathname !=="/" ? (<Header/>) : null}
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route exact path="/challenges" element={< Challenges />} />
        <Route exact path="/scoreboard" element={< Scoreboard />} />
        <Route exact path="/faq" element={< FAQ />} />
        <Route exact path="/sign-in" element={< SignIn />} />
        <Route exact path="/registration" element={< Registration />} />
        <Route exact path="/sign-out" element={<SignOut />} />
      </Routes>
    </>
  );
}