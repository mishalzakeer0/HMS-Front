import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./PatientDashboard.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { signout } from "../../../utils/utils";
import { IoSettings } from "react-icons/io5";
import CreateMessage from "../../Modals/CreateMessage";
const PatientDashboard = () => {
  const [show, setShow] = useState(0);
  const data = localStorage.getItem("data");
  const parsedData = JSON.parse(data);
  const token = parsedData.data.token;
  const id = parsedData.data.id;

  const handleClick = (item) => {
    setShow(item);
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="nav-container">
          <Navbar.Brand>Patient Dashboard</Navbar.Brand>
          <Nav className="d-flex justify-content-between w-100">
            <Link
              className="text-secondary p-2 Appointment-div"
              to="/PatientLogin/Dashboard/Appointment"
            >
              {" "}
              Appointment{" "}
            </Link>

            <NavDropdown
              title={<IoSettings size="20px" color="grey" />}
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
            <h3>Create Message</h3>
          </Col>
        </Row>
        <CreateMessage
          show={show === 1}
          handClick={handleClick}
          token={token}
          user={"patient"}
        />
      </Container>
    </>
  );
};

export default PatientDashboard;
