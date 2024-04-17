import React from 'react'
import {} from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Appointment.css'
import {useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
const Appointment = () => {
  const form = useForm()
  const {register, control, handleSubmit, formState} = form
  const {errors} = formState
  const onSubmit = (data) => {
    console.log('Form Submitted', data)
  }
  
  return (
    <div className="body-div">
      <Container fluid>
        <Row className="d-flex flex flex-wrap gap-5">
          {/* body paragraph starts here */}

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

          {/* form content starts here */}

          <Col md className="right p-5">
            <div className="appointment-form">
              <h2 className="text-primary text-center pt-3">
                Make Appointment
              </h2>

              <form
                className="p-4"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* first name here */}
                <label class="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control input-form"
                  placeholder="First Name"
                  aria-label="Username"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                <p className='text-danger fs-6 fw-light'>{errors.firstName?.message}</p>
                {/* second name here */}
                <label class="form-label">Second Name</label>
                <input
                  type="text"
                  className="form-control input-form"
                  placeholder="Second Name"
                  aria-label="Username"
                  {...register("secondName", {
                    required: "Second Name is required",
                  })}
                />
                <p className='text-danger fs-6 fw-light'>{errors.secondName?.message}</p>
                {/* email adress here */}
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control input-form"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    {...register("Email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      }
                    })}
                  /><p className='text-danger fs-6 fw-light'>{errors.Email?.message}</p>

                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                {/* password here */}
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control input-form"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    {...register("Password", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: 'Password must contain at least 8 characters, including one uppercase letter, one special character, one lowercase letter, and one number',
                      }
                    })}
                  />
                  <p className='text-danger fs-6 fw-light'>{errors.Password?.message}</p>
                </div>
                {/* submit button */}
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              <DevTool control={control} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Appointment
