import React from 'react';
import './App.css';
import {Link} from "react-scroll"
import {BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs';

const myData = [
    {
        "icon": <BsGrid1X2Fill className='icon' />,
        "name": "Dashboard"
    },
    {
        "icon": <BsFillArchiveFill className='icon' />,
        "name": "Products"
    },
    {
        "icon": <BsPeopleFill className='icon' />,
        "name": "Customers"
    },
    {
        "icon": <BsListCheck className='icon' />,
        "name": "Income"
    },
    {
        "icon": <BsMenuButtonWideFill className='icon' />,
        "name": "Promote"
    },
    {
        "icon": <BsFillGearFill className='icon' />,
        "name": "Help"
    },
]

const renderMyData = myData.map(function(item, key){
    return <ul className='sidebarList' key={key}>
        <li className='sidebarListItem'>
            {/* <a href="#">{item.icon}{item.name}</a> */}
            <Link to='#' smooth={true} spy={true}>{item.icon}{item.name}</Link>
        </li>
    </ul>
})

function Sidebar({openSidebarToggle, openSidebar}) {

  return (
    <aside id="sidebar" className = {openSidebarToggle ? "sidebar-responsive" : "" }>
        <div className='sidebarTitle'>
            <div className='sidebarBrand'>Dashboard
            </div>
            <span className='icon close-icon' onClick={openSidebar}>x</span>
        </div>

        <div>{renderMyData}</div>

        <div className='sidebarDown'>
            <div className='downBox-1'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM70bc_MwqsUOdjIUjSbP1Xmh0Mqf0yS5xbw&usqp=CAU" alt="img" width={30} height={30}/>
            </div>
            <div className='downBox-2'>
                <h3>Evano</h3>
                <p>Project Manager</p>
            </div>
        </div>


    </aside>
  )
}

export default Sidebar;








{/* <ul className='sidebarList'>
<li className='sidebarListItem'>
    <a href="">
        <BsGrid1X2Fill className='icon' /> Dashboard
    </a>
</li>
<li className='sidebarListItem'>
    <a href="">
        <BsFillArchiveFill className='icon' /> Products
    </a>
</li>
<li className='sidebarListItem'>
    <a href="">
        <BsPeopleFill className='icon' /> Customers
    </a>
</li>
<li className='sidebarListItem'>
    <a href="">
        <BsListCheck className='icon' /> Income
    </a>
</li>
<li className='sidebarListItem'>
    <a href="">
        <BsMenuButtonWideFill className='icon' /> Promote
    </a>
</li>
<li className='sidebarListItem'>
    <a href="">
        <BsFillGearFill className='icon' /> Help
    </a>
</li>
</ul> */}