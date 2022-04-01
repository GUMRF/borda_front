import React from 'react';
import { HomePage } from './pages/Home';
import { ChallengesPage } from './pages/Challenges';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/challenges" element={<ChallengesPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;