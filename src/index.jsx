import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store'

import './styles/index.css'

import { Home } from './pages/home';
import { Challenges } from './pages/challenges';
import { Scoreboard } from './pages/scoreboard';
import { FAQ } from './pages/faq';
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'
import { SignOut } from './pages/sign-out'
import { UserProfile } from './pages/user-profile'
import { NotFound } from './pages/notFound';

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
      {/* {location.pathname !== "/sign-in" && location.pathname !=="/sign-up" && location.pathname !=="/" ? (<Header/>) : null} */}
      {location.pathname === "/challenges" || location.pathname === "/scoreboard" || location.pathname === "/FAQ" || location.pathname === "/settings" ? (<Header />) : null}
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route exact path="/challenges" element={< Challenges />} />
        <Route exact path="/scoreboard" element={< Scoreboard />} />
        <Route exact path="/FAQ" element={< FAQ />} />
        <Route exact path="/sign-in" element={< SignIn />} />
        <Route exact path="/sign-up" element={< SignUp />} />
        <Route exact path="/sign-out" element={< SignOut />} />
        <Route exact path="/settings" element={< UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}