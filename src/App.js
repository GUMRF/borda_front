import React from 'react';
import HomePage from './pages/HomePage';
//import NavBar from './components/NavBar';
import Example from './components/NavBarR';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

    function App() {
      return (
        <>
        <Router>
        {/* <NavBar/> */}
        <Example/>
        <Routes>
          <Route exact path="/" component={ HomePage } />
        </Routes>
        </Router>
        </>
      );
    }
export default App