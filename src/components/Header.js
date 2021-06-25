import React from "react";
import "../styles/header.css";
import teslaLogo from "../images/logo.png";
import menu from "../images/menu.png";
import MenuIcon from '@material-ui/icons/Menu';


function Header({setOpenMenu}) {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={teslaLogo} />
      </div>
      <div className="header__center">
        <p>
          <a href="">model s</a>
        </p>
        <p>
          <a href="">model 3</a>
        </p>
        <p>
          <a href="">model x</a>
        </p>
        <p>

          <a href="">model y</a>
        </p>
        <p>

          <a href="">solar proof</a>
        </p>
        <p>

          <a href="">solar panels</a>
        </p>
      </div>
      <div className="header__right">
        <p><a href="">shop</a></p>
        <p><a href="">tesla account</a></p>
        {/* <img src={menu} alt="" /> */}
        <MenuIcon className="header__burgurIcon" onClick={()=>{setOpenMenu(true)}}/>
      
      </div>
   
      
    </div>
  );
}

export default Header;

