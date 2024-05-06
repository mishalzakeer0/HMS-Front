// import 'react-phone-number-input/style.css'
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PatientLogin.css';
import axios from '../../../api/axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../feature/userSlice';

const PatientLogin = () => {
  
  const form = useForm();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = form;
  const navigate = useNavigate()
  const dispatch = useDispatch();
  async function Login(data) {
    try {
      const response = await axios.post('http://localhost:3001/patient/Login', data,
      {
        headers: {"Content-Type": 'application/json'},
        withCredentials: true
      }
      );
    
      // console.log(response,"response")
      if (response.status === 200) {
        localStorage.setItem('data', JSON.stringify(response.data));
        // localStorage.clear();
        
        
        
        navigate("/PatientLogin/Dashboard");
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
      console.error(error);
    };
  };

  return (
    <Container fluid className="bg-success">
      <Row>
        <Col md className=" p-5 bg-dark">
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
            <button type="submit" className="btn btn-primary" id="login button">
              Submit
            </button>
          </form>
          <p className="text-primary"> doesn't have an account? <span><a href='/PatientSignUp'>Sign Up here </a></span></p>
          <DevTool control={control} />
        </Col>
      </Row>
    </Container>
  );
};

export default PatientLogin;
