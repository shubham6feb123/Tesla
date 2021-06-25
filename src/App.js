import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import SideBarMenu from "./components/SideBarMenu";



function App() {
  const [openMenu,setOpenMenu] = useState(false);
  return (
    <div className="app">
      <Header setOpenMenu={setOpenMenu} />
      <SideBarMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
       <Home/>
    </div>
  );
}

export default App;
