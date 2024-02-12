import React, { useEffect, useState } from 'react'
import './App.css';
import Footer from './component/reuse/Footer';
import Navbar from './component/reuse/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Course from './component/Course';
import OnlineLearn from './component/OnlineLearn';
import {createContext} from 'react'
import Error from './component/Error';


export const Api = createContext();



function App() {
  let [loading, setLoading] = useState(false);
  // ----------------loding ----------------
  useEffect(()=>{
    setLoading(true)

     setTimeout(()=>{
          setLoading(false);
     },900)

  },[]);

  let startLearn=[
          {
            name: 'Microsoft Office',
            Day: '45 Day',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLLor3kVQL_RKW0JMKPi9X1nEvX_BLKWt2akNMAgBbW18y5_fyFJt6FXupN1jCGurQO50&usqp=CAU'
          },
          {
            name: 'O_Level',
            Day:  '1 Year',
            img: 'https://scholarstudysolution.com/wp-content/uploads/2022/05/Copy-of-Copy-of-Copy-of-Purple-3D-and-Modern-Free-Programming-Course-Instagram-Post-300x300.png'
          },
          {
            name: 'DCA',
            Day: '6 month',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyabfiz-Lp6SihkcBDcep4Yx23GK54dc8BZw&usqp=CAU'
          },
          {
            name: 'Tally',
            Day: '3 month',
            img: 'https://www.edubridgeindia.com/blog/storage/2023/07/tally-erp9.jpg'
          },
          {
            name: 'ADCA',
            Day: '1 year',
            img: 'https://www.bcitworld.com/images/about/adca.jpg' 
          }
  ]
 
  if(loading){
    return <div class="lds-dual-ring"></div>
  }


  return (
    <>
    <Api.Provider value={{startLearn}}>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/course" element={ <Course /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/onlineLearn" element={ <OnlineLearn /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
      <Footer />
      </Api.Provider>
    </>
  );
}

export default App;
