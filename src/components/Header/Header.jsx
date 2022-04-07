import React from 'react';

import NavMenu from './NavMenu';
import SearchBar from './SearchBar';
import CountdownTimer from './Timer';

function Header() {
  return (
    <>
      <header className='w-full h-14 bg-zinc-800 flex flex-row'>
        <NavMenu />
        <div className='flex flex-row justify-between items-center w-full'>
          <div className='w-72 px-3'><SearchBar/></div>
          <CountdownTimer countdownTimestampMs={20000000000000} />
          <div className=" text-gray-200 pr-8">Profile</div>
        </div>
      </header>
    </>
  );
}

export default Header;