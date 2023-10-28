import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className="App">
      <Header openSidebar = {openSidebar} />
      <Sidebar openSidebarToggle = {openSidebarToggle} openSidebar = {openSidebar} />
      <Home />
    </div>
  )
}

export default App;