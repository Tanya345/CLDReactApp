import { Header } from "./MyComponents/Header";
import { Colleges } from "./MyComponents/Colleges";
import './App.css';
import data from './colleges.json';
import React from 'react';

function App() {
  return (
    <>
      <Header />
    
        <div className="mygrid" >
        <Colleges/>
      </div>
      
    </>
  );
}

export default App;
