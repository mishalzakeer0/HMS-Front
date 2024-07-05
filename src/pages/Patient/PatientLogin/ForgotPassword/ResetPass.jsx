import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "../../../../api/axios";

const ResetPass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const { token } = useParams();

  async function Reset(data) {
    try {
      const response = await axios.post(
        `https://hms-1-1kdd.onrender.com:3001/patient/resetPassword/${token}`,
        data
      );
      if (response.status === 200) {
        console.log(response);
        navigate("/PatientLogin");
      }
    } catch (error) {
      notify();
      console.error(error);
    }
  }

  const notify = () =>
    toast.error("Errors in Password", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const newPassword = watch("newPassword");

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
          <h2 className="text-primary text-center pt-3">Reset Password</h2>
          <form className="p-4" onSubmit={handleSubmit(Reset)}>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control input-form"
                placeholder="Enter New Password"
                {...register("newPassword", {
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
                {errors.newPassword?.message}
              </p>
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control input-form"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Password is required",
                  validate: (value) =>
                    value === newPassword || "Passwords do not match",
                })}
              />
              <p className="text-danger fs-6 fw-light">
                {errors.confirmPassword?.message}
              </p>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              id="reset-password-btn"
            >
              Reset Password
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPass;
