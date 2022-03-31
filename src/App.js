import React from 'react';
import { HomePage } from './pages/HomePage';
import ChallengesPage from './pages/ChallengesPage';
//import NavBar from './components/NavBar';
import Example from './components/NavBarR';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

    function App() {
      return (
        <>
        <Router>
        {/* <NavBar/> */}
        <Example/>
        <Routes>
          <Route exact path="/home" element={ <HomePage/> } />
          <Route exact path="/challenges" element={ <ChallengesPage/> } />
        </Routes>
        </Router>
        </>
      );
    }
    
export default App;