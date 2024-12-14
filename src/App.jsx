import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import Menu from './Menu';

function App() {
  return (
    <>
    <Header></Header>
    <Navbar></Navbar>

    <hr></hr>

    <div id="home">
      <p>The word <span style={{color: 'rgba(92, 141, 108, 1)'}}>soup</span> orinates from post-classical Latin verb <span style={{color: 'rgba(92, 141, 108, 1)'}}>suppāre</span> meaning ‘soak’, borrowed from Germanic root sup- to English <span style={{color: 'rgba(92, 141, 108, 1)'}}>supper</span>.
        <br></br>From it was derived the noun suppa, which passed into Old French as soupe. </p>

        <p>with which we then created: <span style={{color: 'rgba(92, 141, 108, 1)'}}>suppa</span></p>

    </div>
    <div id="content">
       {/* <img src={} alt="" /> */}

       <p>why we created suppa</p>

      <p>our vision</p>

      <p>about us</p>
    </div>
    </>
  );
}

function AppWithRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
    </Router>
  );
}

export default AppWithRoutes;
