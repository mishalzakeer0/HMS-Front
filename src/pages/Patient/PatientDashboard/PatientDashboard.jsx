import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Message from '../../Components/Message';
import { Link, useNavigate } from 'react-router-dom';
import "./PatientDashboard.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
import { signout } from '../../../utils/utils';
import { IoSettings } from "react-icons/io5";
const PatientDashboard = () => {
  const [isClick, setisClick] = useState(false); 
  
  const handleClick = () => {
    setisClick(!isClick)
  }
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>Patient Dashboard</Navbar.Brand>
            <Nav className="me-auto">
              <Link className='text-secondary p-2 Appointment-div' to="/PatientLogin/Dashboard/Appointment"> Appointment </Link>
              <Link className='text-secondary p-2 'onClick={handleClick}  >Message</Link>
              <NavDropdown
                title={<IoSettings size="20px" color="grey" />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item onClick={signout}>Sign-Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
        {isClick && <Message/>}
      </>

    );
}

export default PatientDashboard
