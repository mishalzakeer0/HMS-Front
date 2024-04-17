import React from 'react'
import {} from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Appointment.css'
const Appointment = () => {
  return (
    <div className="body-div">
      <Container fluid>
        <Row className="d-flex flex flex-wrap gap-5">
          <Col md className="left">
            <h1 className="text-dark pt-5 heading">
              Book an <span className="text-primary">Appointment</span> <br />
              online
            </h1>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              quibusdam sit quos reiciendis repudiandae reprehenderit ea earum?
              Cupiditate veritatis tempora laborum error a squas laudantium quos
              labore, unde fuga voluptas!
            </p>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              earum explicabo iures repudiandae illo, consequatur asperiores id
              sequi necessitatibus ullam nulla culpa esses dolorem consectetur
              ipsa itaque rerum quis natus.
            </p>
            <div className="arrows">
              <h6>
                <ArrowRightCircleFill color="#0d6efd" /> Medic is your reliable
                health care partner.
              </h6>
              <h6>
                <ArrowRightCircleFill color="#0d6efd" /> Expert care, your
                well-being
              </h6>
            </div>
          </Col>
          <Col md className="right p-5">
            <div className="appointment-form">
              <h2 className="text-primary text-center pt-3">
                Make Appointment
              </h2>
              <form className="p-4">
                <label class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control input-form"
                  placeholder="First Name"
                  aria-label="Username"
                />
                <label class="form-label">Second Name</label>
                <input
                  type="text"
                  class="form-control input-form"
                  placeholder="Second Name"
                  aria-label="Username"
                />
                <div class="mb-3">
                  <label class="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control input-form"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control input-form"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Appointment
