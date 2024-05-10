import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useForm, Controller, useFormState } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "../../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DoctorSignUp = ({ show, handClick, token, user}) => {
  
  const [number, setNumber] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    
  } = useForm({
    mode: "onChange",
  });
  const { isValid } = useFormState({control});
  const notifySuccess = () =>
  toast.success("Account Successfully Created", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  const notifyError = () =>
    toast.error("Error While Creating Account", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      theme: "colored",
    });
  
  async function SignUp(formData) {
    try {
      // console.log("Form Data:", formData);
      // console.log("token", token);
  
      let response;
  
      if (user === "admin") {
        response = await axios.post(
          "http://localhost:3001/admin/doctor/create",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
          );
          
      notifySuccess()
      } 
      else {
        response = await axios.post(
          "http://localhost:3001/doctor/signUp",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        notifySuccess()
      }
      console.log(response);
      
    } catch (error) {
      notifyError()
      console.error(error);
    }
  }
  

  return (
    <>
      
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Modal show={show} onHide={handClick}>
        <Form onSubmit={handleSubmit(SignUp)}>
          <Modal.Header closeButton>
            <Modal.Title>Doctor Sign-Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Mishal Zakeer"
                autoFocus
                {...register("name", {
                  required: "Name is required",
                })}
              />
              <p className="text-danger fs-6 fw-light">
                {errors.name?.message}
              </p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="specialization">
              <Form.Label>Specialization</Form.Label>
              <Form.Control
                type="name"
                placeholder="ENT"
                autoFocus
                {...register("specialization", {
                  required: "Specialization is required",
                })}
              />
              <p className="text-danger fs-6 fw-light">
                {errors.specialization?.message}
              </p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="experience_year">
              <Form.Label>Experinece Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="5"
                min={0}
                max={50}
                autoFocus
                {...register("experience_years", {
                  required: "Experinece Year is required",
                })}
              />
              <p className="text-danger fs-6 fw-light">
                {errors.experience_years?.message}
              </p>
            </Form.Group>
            <Controller
              control={control}
              name="contact_number"
              rules={{
                required: "Phone Number is required",
                validate: (value) => {
                  return isValidPhoneNumber(value) || "Invalid Phone Number";
                },
              }}
              render={({ field: { onChange } }) => (
                <PhoneInput
                  className="form-control input-form"
                  onChange={onChange} // send value to hook form
                  value={number}
                  placeholder="phone number"
                />
              )}
            />

            <p className="text-danger fs-6 fw-light">
              {errors.contact_number?.message}
            </p>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <p className="text-danger fs-6 fw-light">
                {errors.email?.message}
              </p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                {...register("address", {
                  required: "Address is required",
                })}
              />
            </Form.Group>
            <p className="text-danger fs-6 fw-light">
              {errors.address?.message}
            </p>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password*123"
                autoFocus
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
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handClick}>
              Close
            </Button>
            <Button
              type="submit"
              variant="primary"
              onClick={handClick}
              disabled={!isValid}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Form>
        <DevTool control={control} />
      </Modal>
    </>
  );
};

export default DoctorSignUp;
