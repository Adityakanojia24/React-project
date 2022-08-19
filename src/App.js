import React from 'react';

import Navbar from './components/navbar';
import Center from './components/center';
import Timer from './components/timer';
import Clock from './components/clock';
import Password from './components/PasswordGenerator';
import List from './components/list';
import Home from './components/home';
import Footer from './components/footer';


const App=()=>{
  return(

  <>
     <Navbar/>
    <Center/>
    <List/>
    <Timer/>
    <Clock/>
    <Password/>
    <Home/>
    <Footer/>
   
   </>
  );
}
export default App;

