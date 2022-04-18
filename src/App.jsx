
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import React from 'react';
import { Home } from './pages/Home';
import { Challenges } from './pages/Challenges';
import { Scoreboard } from './pages/Scoreboard';
import { About } from './pages/About';
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Logout } from './pages/Logout'
import { Profile } from './pages/Profile'
import { NotFound } from './pages/NotFound';

import Layout from './components/Layout';

export default function App() {

    // let location = useLocation();
    return (
        <Router>
            {/* {window.location.pathname !== "/sign-in" && window.location.pathname !=="/sign-up" && window.location.pathname !=="/" ? (<Header/>) : null} */}
            {/* {window.location.pathname === "/challenges" || window.location.pathname === "/scoreboard" || window.location.pathname === "/FAQ" || window.location.pathname === "/settings" ? (<Header />) : null} */}
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={< Home />} />
                <Route path="about" element={<Layout> < About /> </Layout>} />
                <Route path="login" element={< Login />} />
                <Route path="register" element={< Register />} />
                <Route path="logout" element={< Logout />} />
                <Route path="scoreboard" element={<Layout> < Scoreboard /> </Layout>} />
                <Route path="challenges" element={<Layout> < Challenges /> </Layout>} />
                <Route path="profile" element={<Layout> < Profile /> </Layout>} />
            </Routes>
        </Router >
    );
}