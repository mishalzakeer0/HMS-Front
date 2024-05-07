import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoSettings } from "react-icons/io5";
import { signout } from '../../utils/utils';

const DoctorDashboard = () => {

    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>Admin Dashboard</Navbar.Brand>
            <Nav className="me-auto">
              {/* <Link className='text-secondary p-2 Appointment-div' to="/PatientLogin/Dashboard/Appointment"> Appointment </Link> */}

              <NavDropdown
                title={<IoSettings size={"20px"} color="grey" />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item onClick={signout}>Sign-Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
          
        </Navbar>
      </>
    );
}

export default DoctorDashboard