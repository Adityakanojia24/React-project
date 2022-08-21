import React, { useState } from "react";

// import Navbar from './components/navbar';
// import Center from './components/center';
// import Timer from './components/timer';
// import Clock from './components/clock';
// import Password from './components/PasswordGenerator';
// import List from './components/list';
// import Home from './components/home';
// import Footer from './components/footer';
// import Test from './components/practise';
// import Practisetest from './components/practiseeffect';
import CondComp from './components/condcomp';


const App=()=>{
  // const Alert=()=>{
  //   alert("hello from the parent")
  // }

  // const [title, settitle]= useState("Theory");
  return(

  <>
  {/* <Test title={title} settitle={settitle}/> */}
     {/* <Navbar/> */}
    {/* <Center/> */}
    {/* <List/> */}
    {/* <Timer/> */}
    {/* <Clock/> */}
    {/* <Password/> */}
    {/* <Home/> */}
    {/* <Footer/> */}
   {/* {<Practisetest/>} */}
   <CondComp/>
   </>
  );
}
export default App;

