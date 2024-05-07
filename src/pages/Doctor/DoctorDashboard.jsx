import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { signout } from "../../utils/utils";
import { IoSettings } from "react-icons/io5";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sample from "../Admin/Modals/Sample";
const DoctorDashboard = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
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
        <Row className="p-5">
          <Col className="pt-5 pb-5 bg-primary" onClick={handleClick}>
            1 of 3
          </Col>
          <Col className="pt-5 pb-5 bg-secondary">2 of 3 </Col>
          <Col className="pt-5 pb-5 bg-warning">3 of 3</Col>
        </Row>
        {show && <Sample show={show} setShow={setShow} />}
        <Row className="p-5">
          <Col className="pt-5 pb-5 bg-danger">1 of 3</Col>
          <Col className="pt-5 pb-5 bg-success">2 of 3 </Col>
          <Col className="pt-5 pb-5 bg-info">3 of 3</Col>
        </Row>
      </Container>
    </>
  );
};

export default DoctorDashboard;
