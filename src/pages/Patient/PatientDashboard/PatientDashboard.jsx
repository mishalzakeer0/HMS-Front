import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Message from '../../Components/Message';
import { useNavigate } from 'react-router-dom';
import "./PatientDashboard.css"
const PatientDashboard = () => {
  const [isClick, setisClick] = useState(false); 
  const navigate = useNavigate()
  const handleClick = () => {
    setisClick(!isClick)
  }
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <div className='text-primary Appointment-div' onClick={()=>{navigate("/PatientLogin/Dashboard/Appointment")}}> Appointment </div>
              <button onClick={handleClick}  >Message</button>
            </Nav>
          </Container>
        </Navbar>
        {isClick && <Message/>}
      </>

    );
}

export default PatientDashboard
