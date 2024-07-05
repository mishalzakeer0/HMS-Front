import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { isValidPhoneNumber } from "react-phone-number-input";
import axios from "../../api/axios";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const PatientSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    defaultValues: { registration_date: new Date() },
  });
  const navigate = useNavigate();

  async function SignUp(data) {
    try {
      const response = await axios.post(
        "https://hms-1-1kdd.onrender.com:3001/patient/signUp",
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
        {/* Sign up is here */}
        <Col md className="bg-info">
          <h2 className="text-primary text-center pt-3">Patient Sign Up</h2>
          {/* first name is here */}
          <form className="p-4" onSubmit={handleSubmit(SignUp)}>
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control input-form"
              placeholder="First Name"
              {...register("first_name", {
                required: "First Name is required",
              })}
            />
            <p className="text-danger fs-6 fw-light">
              {errors.first_name?.message}
            </p>
            {/* last name is here */}
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control input-form"
              placeholder="Last Name"
              {...register("last_name", {
                required: "Last Name is required",
              })}
            />
            <p className="text-danger fs-6 fw-light">
              {errors.last_name?.message}
            </p>
            {/* age is here */}
            <label className="form-label">Age</label>
            <input
              type="Number"
              min={0}
              max={120}
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
                {...register("gender", {
                  required: "Gender is required",
                })}
              />{" "}
              Female
              <input
                type="radio"
                name="gender"
                value="Male"
                {...register("gender", {
                  required: "Gender is required",
                })}
              />{" "}
              Male
              <p className="text-danger fs-6 fw-light">
                {errors.Gender?.message}
              </p>
            </div>
            {/* email is here  */}
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
            {/* Phone Number is here  */}
            <div>
              <label htmlFor="phone">Phone Number</label>
              <Controller
                control={control}
                name="Phone"
                rules={{
                  required: "Phone Number is required",
                  validate: (value) => {
                    return isValidPhoneNumber(value) || "Invalid Phone Number";
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

              <p className="text-danger fs-6 fw-light">
                {errors.Phone?.message}
              </p>
            </div>
            {/* Address is here  */}
            <label className="form-label"> Address</label>
            <input
              type="address"
              className="form-control input-form"
              placeholder="Address"
              {...register("address", {
                required: "Address is required",
              })}
            />
            <p className="text-danger fs-6 fw-light">
              {errors.address?.message}
            </p>
            {/* City is here  */}
            <label className="form-label"> City</label>
            <input
              type="text"
              className="form-control input-form"
              placeholder="City"
              {...register("city", {
                required: "City is required",
              })}
            />
            <p className="text-danger fs-6 fw-light">{errors.city?.message}</p>
            {/* State is here  */}
            <label className="form-label"> State</label>
            <input
              type="text"
              className="form-control input-form"
              placeholder="State"
              {...register("state", {
                required: "State is required",
              })}
            />
            <p className="text-danger fs-6 fw-light">{errors.state?.message}</p>
            {/* Country is here  */}
            <label className="form-label"> Country</label>
            <input
              type="text"
              className="form-control input-form"
              placeholder="Country"
              {...register("country", {
                required: "Country is required",
              })}
            />
            <p className="text-danger fs-6 fw-light">
              {errors.country?.message}
            </p>
            {/* Postal Code is here  */}
            <label className="form-label"> Postal Code</label>
            <input
              type="number"
              maxLength={6}
              className="form-control input-form"
              placeholder="Postal Code"
              {...register("postal_code", {
                required: "Postal Code is required",
              })}
            />
            <p className="text-danger fs-6 fw-light">
              {errors.PostalCode?.message}
            </p>

            {/* registration date is here */}

            <div>
              <label htmlFor="registration_date">Select a Date</label>
              <Controller
                control={control}
                name="registration_date"
                rules={{
                  required: "Date is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <DatePicker onChange={onChange} value={value} />
                )}
              />
            </div>

            <p className="text-danger fs-6 fw-light">
              {errors.registration_date?.message}
            </p>
            {errors.registration_date && (
              <p className="text-danger fs-6 fw-light">
                {errors.registration_date.message}
              </p>
            )}

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
            <button
              type="submit"
              className="btn btn-primary"
              id="sign-up-btn"
              onSubmit={SignUp}
            >
              Submit
            </button>
          </form>
          <DevTool control={control} />
        </Col>
      </Row>
    </Container>
  );
};
export default PatientSignUp;
