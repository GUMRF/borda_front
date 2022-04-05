import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { WelcomePage } from './pages/Welcome';
import { ChallangesPage } from './pages/Challanges';
import { ScoreboardPage } from './pages/Scoreboard';
import { FAQPage } from './pages/FAQ';


function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={< WelcomePage />} />
          <Route exact path="/challanges" element={< ChallangesPage />} />
          <Route exact path="/scoreboard" element={< ScoreboardPage />} />
          <Route exact path="/faq" element={< FAQPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;