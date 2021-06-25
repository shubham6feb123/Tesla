import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import '../styles/sideBarMenu.css';

function SideBarMenu({openMenu,setOpenMenu}) {
    return (
        <div className={`sideBarMenus ${openMenu?"":'hideMenu'}`}>
               <div className="sideBarMenu">
        <div className="sideBarMenu__closeIcon" onClick={()=>{setOpenMenu(false)}}>
<CloseIcon/>
        </div>
        <li><a href="">Existing Inventory</a></li>
        <li><a href="">Used Inventory</a></li>
        <li><a href="">Trade-In</a></li>
        <li><a href="">Cybertruck</a></li>
        <li><a href="">Roadster</a></li>
        <li><a href="">Semi</a></li>
        <li><a href="">Charging</a></li>
        <li><a href="">Powerwall</a></li>
        <li><a href="">Commercial Energy</a></li>
        <li><a href="">Utilities</a></li>
        <li><a href="">Test Drive</a></li>
        <li><a href="">Find Us</a></li>
        <li><a href="">Support</a></li>
        <li><a href="">United States</a></li>
      </div>
        </div>
    )
}

export default SideBarMenu
