import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyNavbar from './components/navbar/navBar';
import Indices  from './components/indices/indices';
import Currency from './components/currency/currency';
import Home from './components/home/home';
function App() {
  return (
    <>
    <MyNavbar></MyNavbar>
    <Routes>
      <Route path="/indices" element={<Indices />} />
      <Route path="/currency" element={<Currency />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
