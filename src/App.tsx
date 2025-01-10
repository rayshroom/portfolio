import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Home';
import UnderConstruction from './UnderConstruction';

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<UnderConstruction />} />
        <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App
