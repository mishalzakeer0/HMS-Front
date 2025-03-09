import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./PatientLogin.css";
import axios from "../../../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../feature/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PatientLogin = () => {
  const form = useForm();
  const notify = () =>
    toast.error("Error while logging", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = form;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function Login(data) {
    try {
      const response = await axios.post(
        "https://hms-1-ohin.onrender.com/patient/Login",
        data,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log(response, "response");
        localStorage.setItem(
          "data",
          JSON.stringify({ data: response.data, role: "Patient" })
        );

        navigate('/PatientLogin/Dashboard');

        dispatch(
          login({
            user: "Patient",
            email: response.data.username,
            password: response.data.password,
            loggedIn: true,
          })
        );
      }
    } catch (error) {
      notify();
      console.error(error);
    }
  }

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
        <Col md className="p-5 bg-dark main">
          <h2 className="text-primary text-center pt-3">Patient Login</h2>
          <form className="p-4" onSubmit={handleSubmit(Login)}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control input-form"
                aria-describedby="emailHelp"
                placeholder="Email"
                {...register("username", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <p className="text-danger fs-6 fw-light">
                {errors.username?.message}
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
            <div
              className=" d-flex justify-content-between"
              style={{ width: "80%" }}
            >
              <button
                type="submit"
                className="btn btn-primary"
                id="login button"
              >
                Submit
              </button>
              <p
                onClick={() => navigate("/PatientLogin/ForgotPassword")}
                className="text-primary"
                style={{ cursor: "pointer" }}
              >
                Forgot Password?
              </p>
            </div>
          </form>
          <p className="text-primary">
            Don't have an account?
            <span
              onClick={() => navigate('/PatientSignUp')}
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            >
              Sign Up here
            </span>
          </p>
          <DevTool control={control} />
        </Col>
      </Row>
    </Container>
  );
};

export default PatientLogin;
