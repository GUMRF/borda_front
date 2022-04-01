import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavMenu from './NavMenu';
import SearchBar from './SearchBar';
import CountdownTimer from './Timer';

import { HomePage } from '../../pages/Home';
import { ChallangesPage } from '../../pages/Challanges';

function Header() {
  return (
    <header className='w-screen h-14 bg-zinc-800 flex flex-row'>
      <NavMenu />
      <div className='flex flex-row justify-between items-center  w-full'>
        <SearchBar />
        <CountdownTimer countdownTimestampMs={20000000000000} />
        <div className=" text-gray-200">Profile</div>
      </div>

    </header>
  );
}

export default Header;