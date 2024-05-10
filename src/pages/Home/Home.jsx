import React from "react";
import { ChatDotsFill, PhoneFill, Mailbox, Facebook, Instagram} from "react-bootstrap-icons";
import {} from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DrImg from '../../assets/images/doctor.png'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, Link } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const buttonSubmit = () => {
    navigate('/PatientLogin');
  }
  return (
    <>
      <Container fluid className="navbar-items">
        <Row>
          <Col>
            <Navbar expand="lg" className="d-flex flex-wrap align-items-center">
              <Container>
              <Navbar.Brand as={Link} to="/">Medic.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link className="p-2 text-secondary" to="/">
                      Home
                    </Link>
                    <Link className="p-2 text-secondary" to="DoctorLogin">
                      Doctor Login
                    </Link>
                    <Link className="p-2 text-secondary" to="AdminLogin">
                      Admin Login
                    </Link>
                    <Link className="p-2 text-secondary" to="PatientLogin">
                      Patient Login
                    </Link>
                    <Link className="p-2 text-secondary" id="small-screen" to="adminLogin">
                      Admin Login
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
          <Col id="big-screen" className="contact-div">
            <button
            onClick={()=>{
              navigate('/PatientSignUp')
            }}
              type="button"
              className="btn btn-outline-primary rounded-pill contact-btn"
            >
              Sign Up
            </button>
          </Col>
        </Row>
      </Container>
      <Container fluid className="p-0">
        <Row className="body-content">
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
                <span className="text-secondary-emphasis ms-1 me-1">
                  Health
                </span>
                <br />
                service for You.
              </h1>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur,adipisicing
                elit.Temporibus velit libero id facere excepturi cum placeat non
                ipsum quas ab sed ad ducimus quos, eius perferendis sunt impedit
              </p>
              <button
                type="button"
                className="btn btn-primary btn-lg appointment-btn"
                onClick={buttonSubmit}
              >
                Get Appointment
              </button>
            </div>
          </Col>
          <Col>
            <div className="container-fluid Img d-flex justify-content-center">
              <img src={DrImg} alt="Doctor Img" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footer">
        <Row className=" d-flex container-fluid justify-content-around p-5 gap-5">
          <Col>
            <div className="footer-content">
              <h4>Medic.</h4>
              <p>kerala, India</p>
              <p>
                <PhoneFill /> +91 123456789
              </p>
              <p>
                <Mailbox /> info@medic.com
              </p>
            </div>
          </Col>
          <Col>
            <div className="footer-content">
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
          </Col>
          <Col>
            <div className="footer-content">
              <h4>Social Media</h4>
              <p>
                <Facebook /> facebook
              </p>
              <p>
                <Instagram /> instagram
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
