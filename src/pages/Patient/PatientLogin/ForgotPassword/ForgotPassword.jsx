import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "../../../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function Forgot(data) {
    try {
      console.log("hi", data.email);
      const response = await axios.get(
        "https://hms-1-ohin.onrender.com/patient/forgotPassword",
        {
          params: {
            email: data.email,
          },
        }
      );
      if (response.status === 200) {
        console.log(response);
        notifySuccess();
      }
    } catch (error) {
      notifyError();
      console.error(error);
    }
  }

  const notifyError = () =>
    toast.error("Error Finding User", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifySuccess = () =>
    toast.success("Reset Link Has Sent Your Gmail", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    <Container fluid>
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
      <Row>
        <Col md className="bg-info">
          <h2 className="text-primary text-center pt-3">Forgot Password</h2>
          <form className="p-4" onSubmit={handleSubmit(Forgot)}>
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
              <button
                type="submit"
                className="btn btn-primary"
                id="recover-password-btn"
              >
                Recover Password
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
