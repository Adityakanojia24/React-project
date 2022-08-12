import React from 'react';
import ReactDOM from 'react-dom';
import navbar from './components/navbar'
import center from './components/center'
import list from './components/list'
import form from './components/form'
import footer from './components/footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
     <navbar />
    <center/>
    <list/>
    <form/>
    <footer/>
   </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
