import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

import { RequireAuth } from './components/RequireAuth';
import Layout from './components/Layout';

export default function App() {

    // let location = useLocation();
    return (
        <BrowserRouter>
            {/* {location.pathname !== "/sign-in" && location.pathname !=="/sign-up" && location.pathname !=="/" ? (<Header/>) : null} */}
            {/* {location.pathname === "/challenges" || location.pathname === "/scoreboard" || location.pathname === "/FAQ" || location.pathname === "/settings" ? (<Header />) : null} */}
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="about" element={< About />} />
                <Route path="login" element={< Login />} />
                <Route path="register" element={< Register />} />
                <Route path="logout" element={< Logout />} />
                <Route path="scoreboard" element={
                        <Layout>
                            <Scoreboard />
                        </Layout>
                    }
                />
                <Route path="*" element={<NotFound />} />

                <Route path="challenges" element={
                        <RequireAuth redirectTo={"/login"}>
                            <Layout>
                                < Challenges />
                            </Layout>
                        </RequireAuth>
                    }
                />
                <Route path="profile" element={
                        <RequireAuth redirectTo={"/login"}>
                            <Layout>
                                < Profile />
                            </Layout>
                        </RequireAuth>
                    }
                />
            </Routes>
        </BrowserRouter >
    );
}