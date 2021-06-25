import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import '../styles/item.css'
// import MenuIcon from '@material-ui/icons/Menu';
import downarrow from '../images/down-arrow.svg';
import Fade from 'react-reveal';

function Items({
  title,
  description,
  backgroundImg,
  descriptionLink,
  primaryButton,
  secondaryButton,
  arrow,
  twoButtons,
}) {
  return (
    <div className="items" style={{backgroundImage:`url(${backgroundImg})  `}} >
        {/* <div className="items__background">
            <img src={backgroundImg}/>
        </div> */}
      <div className="items__content">
        
        <div className="items__title">
        <Fade bottom>
          {title}
        <p>
            {description} 
        <span> 

            <a href="" style={{textDecoration:"none"} }> {descriptionLink}</a>
          </span>
        </p>
        </Fade>
        </div>
        
        
        <div className="items__buttonsSection">
         <div className="items__buttons">
           <Fade bottom>
         <button className="primaryButton">{primaryButton}</button>
             {twoButtons ? (
             <button className="secondaryButton">{secondaryButton}</button>
            
          ) : (
            ""
          )}
        </Fade>
          </div> 
          <Fade bottom>
          <div className="items__arrow">{arrow ? <img src={downarrow}/> : ""}</div>
          </Fade>
        </div>
       
      </div>
    
    </div>
  );
}

export default Items;
