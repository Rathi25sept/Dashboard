import React from 'react';
import './App.css';
import { BsSearch, BsJustify } from 'react-icons/bs';

function Header({openSidebar}) {

  return (
    <header className="header">
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={openSidebar} />
        </div>
        <div className='header-left'>
            Hello Saloni Rathi
        </div>
        <div className='header-right'>
          <BsSearch className='icon srch-icon' />
          <input type="text" placeholder='Search' />
        </div>
    </header>
  )
}

export default Header;










// {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}