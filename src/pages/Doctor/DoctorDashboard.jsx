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
import Message from "../Admin/Modals/ShowMessage";

const DoctorDashboard = () => {
  const [show, setShow] = useState(0);

  const handleClick = (item) => {
    setShow(item);
    // console.log(show);
  };
  const data = localStorage.getItem("data");
        const parsedData = JSON.parse(data);
        const token = parsedData.data.token;
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Doctor Dashboard</Navbar.Brand>
          <Nav className="d-flex justify-content-between ">
            {/* <Link className='text-secondary p-2 Appointment-div' to="/PatientLogin/Dashboard/Appointment"> Appointment </Link> */}
            <NavDropdown className="d-flex justify-content-end"
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
        {<DoctorSignUp show={show === 1} handClick={handleClick} token={token} user={"doctor"} />}
        {<ShowPatients show={show ===2} handClick={handleClick}  token={token} user={"doctor"} />}
        {<Message show={show ===3} handClick={handleClick} token={token} user={"doctor"}/>}
      </Container>
    </>
  );
};

export default DoctorDashboard;
