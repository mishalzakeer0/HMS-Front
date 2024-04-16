import React from "react";
import { ChatDotsFill, PhoneFill, Mailbox, Facebook, Instagram} from "react-bootstrap-icons";
import {} from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DrImg from '../assets/pexels-cottonbro-studio-5867737-removebg-preview.png'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Home = () => {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Medic.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Doctor</Nav.Link>
            <Nav.Link href="#link">Appointment</Nav.Link>
            <Nav.Link href="#link">Message</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container>
      <button type="button" class="btn btn-outline-primary rounded-pill">Contact Us</button>
      </Container>
    </Navbar>
    <Container fluid className="p-0"> 
      <Row className = 'justify-content-center-' style={{ backgroundColor: "#e3f2fd", gap: "2rem" }}>
        <Col>
          <div
            className="texts container-fluid"
            style={{
              height: "max-content",
              padding: "8rem 0 0 10rem",
            }}
          >
            <h1 className="text-primary">
              We Ensure <br /> the Best
              <span className="text-secondary-emphasis ms-1 me-1">Health</span> <br />service for
              You.
            </h1>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur,adipisicing elit.Temporibus
              velit libero id facere excepturi cum placeat non ipsum quas ab sed
              ad ducimus quos, eius perferendis sunt impedit
            </p>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{
                boxShadow: " 0 .5rem 1rem rgba(0,0,0,0.3)",
              }}
            >
              Get Appointment
            </button>
          </div>
        </Col>
        <Col>
          <div className="container-fluid Img">
            <img src={DrImg} alt="Doctor Img" />
          </div>
        </Col>
      </Row>
    </Container>
      <div className="container-fluid d-flex p-5 bg-light-subtle justify-content-around">
        <div className="">
          <h4>Medic.</h4>
          <p>kerala, India</p>
          <p>
            {" "}
            <PhoneFill /> +91 123456789
          </p>
          <p>
            {" "}
            <Mailbox /> info@medic.com
          </p>
        </div>
        <div className="">
          <h4>Quick Links</h4>
          <a className="text-secondary" href="#">
            Home
          </a>
          <br />
          <a className="text-secondary" href="#">
            Message Us
          </a>
          <br />
          <a className="text-secondary" href="#">
            Appointments
          </a>
        </div>
        <div className="">
          <h4>Social Media</h4>
          <p>
            {" "}
            <Facebook /> facebook
          </p>
          <p>
            {" "}
            <Instagram /> instagram
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
