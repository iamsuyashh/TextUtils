
/* eslint-disable jsx-a11y/anchor-is-valid */
import {Textform} from './components/Textform';
import { useState } from 'react';
import {Navbar} from './components/Navbar';
import { Alert } from './components/Alert';
import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showalert = (message,type) =>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  

  const togglemode=()=>{
    if(mode==='light'){
    setmode("dark")
    document.body.style.backgroundColor='#2C3333';
    showalert("Dark mode has been enabled", "sucess")
    }
    else{
      (setmode("light"))
      document.body.style.backgroundColor='white';
      showalert("light mode has be enabled", "sucess")
    }
    
    
    
  }

  return (
    <>
    <Navbar mode={mode} togglemode={togglemode}/> 
    <Alert alert={alert}/>
    <div className="container my-3">
      <Textform showalert={showalert} heading = "Enter the text" mode={mode}/>
    </div>
    </>
  
    
  );
  
  }
  


export default App;
