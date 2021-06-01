//import logo from './logo.svg';
import React from 'react';
import Address from "./components/Address";
import FullName from "./components/fullName";
import ProfilePhoto from "./components/ProfilePhoto";

 function App() {
  return (
    <div style={{backgroundColor:"Menu", font:"caption", textAlign:"center", border:"solid 1px black", maxWidth:'100vw'}}
    className = "App"> 
    Welcome

    <Address/>
    <FullName/>
    <ProfilePhoto/>
    

    </div>
  );
}
export default App;