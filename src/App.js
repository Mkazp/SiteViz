import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Achivment from './components/Achivment/Achivment';
import Pupils from './components/Pupils/Pupils';
import Box from './components/Box/Box';
import Bottom from './components/Bottom/Bottom';


import 'typeface-montserrat';
import './App.module.scss'; // Создайте файл App.scss для стилей


const App = () => {
  return (
    <Router>
      <div>
        <Menu />

        <div className="containerB mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Achivment" element={<Achivment />} />
            <Route path="/Pupils" element={<Pupils />} />
            <Route path="/Box" element={<Box />} />
          </Routes>
        </div>
        <Bottom/>
      </div>
    </Router>
  );
};

export default App;