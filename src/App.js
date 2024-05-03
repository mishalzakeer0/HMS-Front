import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route, useNavigate, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Appointment from './pages/Appointment/Appointment'
import PatientLogin from './pages/Patient/PatientLogin/PatientLogin';
import PatientSignUp from './pages/PatientSignup/PatientSignUp';
import PatientDashboard from './pages/Patient/PatientDashboard/PatientDashboard';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import DoctorLogin from './pages/Doctor/DoctorLogin'
import AdminLogin from './pages/Admin/AdminLogin';
import { useSelector } from 'react-redux';
import { selectUser } from './feature/userSlice';

const App = () => {
  const user = useSelector(selectUser)
  useEffect(() => {
    console.log(user, 'user');
  },[])
  const navigate = useNavigate()
 
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/PatientLogin" element={<PatientLogin />}></Route>
      <Route path="/PatientLogin/Dashboard" element={<PatientDashboard />}></Route>
      {/* <Route path="/PatientLogin/PatientDashboard/Appointment" element={<Appointment />}></Route> */}
      {user!==null ? (<Route path="/PatientLogin/Dashboard/Appointment" element={<Appointment />}></Route>): <Route path="/PatientLogin" element={<PatientLogin />}></Route>}
      
      {/* {user? console.log("true"): console.log('false')}
       */}
      <Route path="/DoctorLogin" element={<DoctorLogin />}></Route>
      <Route path="/DoctorLogin/Dashboard" element={<DoctorDashboard />}></Route>
      <Route path="/AdminLogin" element={<AdminLogin />}></Route>
      <Route path="/AdminLogin/Dashboard" element={<AdminDashboard />}></Route>
      <Route path='/PatientSignUp' element={<PatientSignUp/>}></Route>
    </Routes>
  );
}

export default App
