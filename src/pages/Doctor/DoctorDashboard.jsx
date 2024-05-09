import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { signout } from "../../utils/utils";
import { IoSettings } from "react-icons/io5";
import './DoctorDashboard.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DoctorSignUp from "../Admin/Modals/DoctorSignUp";
import ShowPatients from "../Admin/Modals/ShowPatients";

const DoctorDashboard = () => {
  const [show, setShow] = useState(0);

  const handleClick = (item) => {
    setShow(item);
    // console.log(show);
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Doctor Dashboard</Navbar.Brand>
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
      <Container>
        <Row className="pt-5">
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
            3 of 3
          </Col>
        </Row>
        {<DoctorSignUp show={show === 1} handClick={handleClick} />}
        
        {/* <Confirmation/> */}
        {<ShowPatients show={show ===2} handClick={handleClick} />}
        <Row className="">
          <Col className="pt-5 pb-5 bg-danger" id="selectors">
            1 of 3
          </Col>
          <Col className="pt-5 pb-5 bg-success" id="selectors">
            2 of 3
          </Col>
          <Col className="pt-5 pb-5 bg-info" id="selectors">
            3 of 3
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DoctorDashboard;
