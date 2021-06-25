import React from 'react'
import Items from './Items';
import models from '../images/ModelS.jpg';
import model3 from '../images/Model3.jpg';
import modelx from '../images/ModelX.jpg';
import modely from '../images/ModelY.jpg';
import solarpanel from '../images/SolarPanels.jpg';
import solarroof from '../images/SolarRoof.jpg';
import accessory from '../images/Accessory.jpg';
import '../styles/home.css';

function Home() {
    return (
        <div className="home">
             <Items
        title={"Model s"}
        description={"order online for"}
        backgroundImg={models}
        descriptionLink={"touchless delivery"}
        primaryButton={"custom order"}
        secondaryButton={"existing inventory"}
        arrow={true}
        twoButtons={true}
      />
      <Items
        title={"Model y"}
        description={"order online for"}
        backgroundImg={modely}
        descriptionLink={"touchless delivery"}
        primaryButton={"custom order"}
        secondaryButton={"existing inventory"}
        arrow={false}
        twoButtons={true}
      />
      <Items
        title={"Model 3"}
        description={"order online for"}
        backgroundImg={model3}
        descriptionLink={"touchless delivery"}
        primaryButton={"custom order"}
        secondaryButton={"existing inventory"}
        arrow={false}
        twoButtons={true}
      />
      <Items
        title={"Model x"}
        description={"Order Online for"}
        backgroundImg={modelx}
        descriptionLink={"Touchless Delivery"}
        primaryButton={"custom order"}
        secondaryButton={"existing inventory"}
        arrow={false}
        twoButtons={true}
      />
     
      <Items
        title={"Lowest Cost Solar Panels in America"}
        description={"Money-back guarantee"}
        backgroundImg={solarpanel}
        descriptionLink={""}
        primaryButton={"order now"}
        secondaryButton={"learn more"}
        arrow={false}
        twoButtons={true}
      />
       <Items
        title={"Solar for New Roofs"}
        description={"Solar Roof Costs Less Than a New Roof Plus Solar Panels "}
        backgroundImg={solarroof}
        descriptionLink={""}
        primaryButton={"order now"}
        secondaryButton={"learn more"}
        arrow={false}
        twoButtons={true}
      />
      <Items
        title={"Accessories"}
        description={""}
        backgroundImg={accessory}
        descriptionLink={""}
        primaryButton={"shop now"}
        secondaryButton={""}
        arrow={false}
        twoButtons={false}
      />
        </div>
    )
}

export default Home
