import React from 'react';
import { HomePage } from '../../pages/Home';
import  NavMenu  from './NavMenu';
import SearchBar from './SearchBar';
import CountdownTimer from './Timer/Timer';
import { ChallangesPage } from '../../pages/Challanges';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="Header bg-zinc-800">
        <div className="first-letter:max-w-7xl flex mx-32 sm:px-6 lg:px-8 w-">
          <div className="flex-initial"><NavMenu/></div>
          <div className="flex items-center justify-center"><SearchBar/></div>
          <div className="flex-auto"><CountdownTimer countdownTimestampMs={20000000000000}/></div>
          <div className="flex-initial text-gray-200">Profile</div>
        </div>
      </nav>
      </div>
);
}
export default Header;