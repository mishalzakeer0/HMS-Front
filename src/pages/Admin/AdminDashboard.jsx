import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DoctorSignUp from "../Admin/Modals/DoctorSignUp";
import ShowPatients from "../Admin/Modals/ShowPatients";
import Message from "./Modals/ShowMessage";import { IoSettings } from "react-icons/io5";
import { signout } from '../../utils/utils';
import ShowDoctor from './Modals/ShowDoctor';
import ShowAppointment from './Modals/ShowAppointment';

const AdminDashboard = () => {
  
  const [show, setShow] = useState(0);
  const data = localStorage.getItem("data");
  const parsedData = JSON.parse(data);
  const token = parsedData.data.token;

  const handleClick = (item) => {
    setShow(item);
    // console.log(show);
  };
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>Admin Dashboard</Navbar.Brand>
            <Nav>
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
        <Container>
        <Row className=" d-flex gap-3 pt-5">
          <Col
            className="pt-5 pb-5 bg-primary"
            id="selectors"
            onClick={() => {
              handleClick(1);
            }}
          >
            <h3>Create Doctor</h3>
          </Col>
          <Col
            className="pt-5 pb-5 bg-secondary"
            id="selectors"
            onClick={() => {
              handleClick(2);
            }}
          >
            <h3>Show Patients</h3>
          </Col>
          <Col
            className="pt-5 pb-5 bg-warning"
            id="selectors"
            onClick={() => {
              handleClick(3);
            }}
          >
            <h3>Show Messages</h3> 
          </Col>
        </Row>
        <Row className=" d-flex gap-3 pt-5">
          <Col
            className="pt-5 pb-5 bg-success"
            id="selectors"
            onClick={() => {
              handleClick(4);
            }}
          >
            <h3>Show Doctor</h3>
          </Col>
          <Col
            className="pt-5 pb-5 bg-danger"
            id="selectors"
            onClick={() => {
              handleClick(5);
            }}
          >
            <h3>Show Appointment</h3>
          </Col>
         
        </Row>
        {<DoctorSignUp show={show === 1} handClick={handleClick} token={token} user={"admin"}/>}
        {<ShowPatients show={show ===2} handClick={handleClick} token={token} user={"admin"}/>}
        {<Message show={show ===3} handClick={handleClick} token={token} user={"admin"}/>}
        {<ShowDoctor show={show ===4} handClick={handleClick} token={token} user={"admin"}/>}
        {<ShowAppointment show={show ===5} handClick={handleClick} token={token} user={"admin"}/>}
      </Container>
      </>
    );
}

export default AdminDashboard