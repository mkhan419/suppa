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
