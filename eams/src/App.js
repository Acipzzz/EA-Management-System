//import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import BorangAduan from './pages/BorangAduan';
import PenginapanHotel from './pages/PenginapanHotel';
import PenginapanWisma from './pages/PenginapanWisma';
import PerancanganPenginapan from './pages/PerancanganPenginapan';
import StatusKerosakan from './pages/StatusKerosakan';
import ErrorPage from './pages/Error';
import {Route, Routes} from 'react-router-dom';




function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/borang-aduan' element={<BorangAduan />} />
        <Route path='/penginapan-hotel' element={<PenginapanHotel />} />
        <Route path='/penginapan-wisma' element={<PenginapanWisma />} />
        <Route path='/penginapan-penginapan' element={<PerancanganPenginapan />} />
        <Route path='/status-kerosakan' element={<StatusKerosakan />} />
        <Route element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
