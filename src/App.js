import React from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Appointment from './pages/Appiontments/Appointment'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Appointment" element={<Appointment />}></Route>
    </Routes>
  );
}

export default App
