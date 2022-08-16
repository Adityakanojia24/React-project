import React from 'react';

import Navbar from './components/navbar';
import Center from './components/center';
import List from './components/list';
import Home from './components/home';
import Footer from './components/footer';


const App=()=>{
  return(

  <>
     <Navbar/>
    <Center/>
    <List/>
    <Home/>
    <Footer/>
   
   </>
  );
}
export default App;

