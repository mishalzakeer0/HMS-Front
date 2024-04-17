import React from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useForm, Controller} from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Patient.css';


const Patient = () => {
  const form = useForm();

  const { register, handleSubmit, formState, control, } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log('Form Submitted', data);
  };

  return (
    <Container fluid className="bg-success">
      <Row>
        <Col md className=" p-5 bg-dark">
          <h2 className="text-primary text-center pt-3">Patient Login</h2>
          <form className="p-4" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control input-form"
                aria-describedby="emailHelp"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <p className="text-danger fs-6 fw-light">
                {errors.email?.message}
              </p>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control input-form"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must contain at least 8 characters, including one uppercase letter, one special character, one lowercase letter, and one number",
                  },
                })}
              />
              <p className="text-danger fs-6 fw-light">
                {errors.password?.message}
              </p>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <DevTool control={form.control} />
        </Col>
        {/* Sign up is here */}
        <Col md className="bg-info">
          <h2 className="text-primary text-center pt-3">Patient Sign Up</h2>
          {/* first name is here */}
          <form className="p-4" onSubmit={handleSubmit(onSubmit)} noValidate>
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control input-form"
              placeholder="First Name"
              {...register("firstName", {
                required: "First Name is required",
              })}
            />
            <p className="text-danger fs-6 fw-light">
              {errors.firstName?.message}
            </p>
            {/* last name is here  */}
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control input-form"
              placeholder="Last Name"
              {...register("lastName", {
                required: "Last Name is required",
              })}
            />
            <p className="text-danger fs-6 fw-light">
              {errors.lastName?.message}
            </p>
            {/* age is here */}
            <label className="form-label">Age</label>
            <input
              type="Number" min={0} max={120}
              className="form-control input-form"
              placeholder="Age"
              {...register("age", {
                required: "Age is required",
              })}
            />
            <p className="text-danger fs-6 fw-light">{errors.age?.message}</p>
            {/* gender is here  */}
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <br />
              <input
                type="radio"
                name="gender"
                value="Female"
                {...register("Gender", {
                  required: "Gender is required",
                })}
              />{" "}
              Female
              <input
                type="radio"
                name="gender"
                value="Male"
                {...register("Gender", {
                  required: "Gender is required",
                })}
              />{" "}
              Male
              <p className="text-danger fs-6 fw-light">
                {errors.Gender?.message}
              </p>
            </div>

            <div className="mb-3">
              {/* email is here  */}
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control input-form"
                aria-describedby="emailHelp"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <p className="text-danger fs-6 fw-light">
                {errors.email?.message}
              </p>
            </div>

            {/* Phone Number is here  */}
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <Controller
                control={control}
                name="PhoneNumber"
                rules={{
                  required: "Phone Number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Invalid phone number format",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    className="form-control input-form"
                    onChange={onChange} // send value to hook form
                    value={value}
                    placeholder="phone number"
                  />
                )}
              />
              {errors.PhoneNumber && (
                <p className="text-danger fs-6 fw-light">
                  this field is required
                </p>
              )}
            </div>
            {/* Address is here  */}
            <label className="form-label"> Address</label>
            <input
              type="address"
              className="form-control input-form"
              placeholder="Address"
              {...register("Address", {
                required: "Address is required",
              })}
            />
            <p className="text-danger fs-6 fw-light">
              {errors.Address?.message}
            </p>
            {/* City is here  */}
            <label className="form-label"> City</label>
            <input
              type="text"
              className="form-control input-form"
              placeholder="City"
              {...register("City", {
                required: "City is required",
              })}
            />
            <p className="text-danger fs-6 fw-light">{errors.City?.message}</p>
            {/* State is here  */}
            <label className="form-label"> State</label>
            <input
              type="text"
              className="form-control input-form"
              placeholder="State"
              {...register("State", {
                required: "State is required",
              })}
            />
            <p className="text-danger fs-6 fw-light">{errors.State?.message}</p>
                        {/* Country is here  */}
                        <label className="form-label"> Country</label>
            <input
              type="text"
              className="form-control input-form"
              placeholder="Country"
              {...register("Country", {
                required: "Country is required",
              })}
            />
            <p className="text-danger fs-6 fw-light">{errors.Country?.message}</p>
                                    {/* Postal Code is here  */}
                                    <label className="form-label"> Postal Code</label>
            <input
              type="number" min={0}
              className="form-control input-form"
              placeholder="Postal Code"
              {...register("PostalCode", {
                required: "Postal Code is required",
              })}
            />
            <p className="text-danger fs-6 fw-light">{errors.PostalCode?.message}</p>
            {/* password is here */}
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control input-form"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must contain at least 8 characters, including one uppercase letter, one special character, one lowercase letter, and one number",
                  },
                })}
              />
              <p className="text-danger fs-6 fw-light">
                {errors.password?.message}
              </p>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <DevTool control={form.control} />
        </Col>
      </Row>
    </Container>
  );
};

export default Patient;
