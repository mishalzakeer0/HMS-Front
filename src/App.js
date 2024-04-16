import React from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Appointment from './pages/Appiontments/Appointment'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/Appointment' element = {<Appointment></Appointment>}></Route>
      </Routes>
    </div>
  )
}

export default App
