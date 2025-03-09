import React, { useEffect, useState } from "react";
import {} from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Appointment.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { Controller } from "react-hook-form";

const Appointment = () => {
  const form = useForm();
  const data = localStorage.getItem("data");
  const parsedData = JSON.parse(data);
  const token = parsedData.data.token;
  const patient_id = parsedData.data.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    defaultValues: { appointment_date: new Date() },
  });
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          "https://hms-1-ohin.onrender.com/admin/doctor/all"
        );
        setDoctor(response.data.message);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);
  async function CreateAppointment(data) {
    try {
      data.patient_id = patient_id;
      console.log(data, "formdata");
      const response = await axios.post(
        "https://hms-1-ohin.onrender.com/patient/appointment/create",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
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
              <h2 className="text-primary text-center p-5 pb-3">
                Make Appointment
              </h2>

              <form
                className="p-4"
                onSubmit={handleSubmit(CreateAppointment)}
                noValidate
              >
                {/* Appointment form here */}
                <div className="pb-2">
                  <label>Choose a Doctors from this list:</label>
                  <select
                    name="Doctors"
                    className="form-control input-form"
                    {...register("doctor_id", {
                      required: "Select a Doctor",
                    })}
                  >
                    <option value="">Select a Doctor</option>
                    {doctor.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name}
                      </option>
                    ))}
                  </select>
                  {errors.Doctors && (
                    <p className="text-danger fs-6 fw-light">
                      {errors.Doctors.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="date">Select a Date</label>
                  <Controller
                    control={control}
                    name="appointment_date"
                    rules={{
                      required: "Date is required",
                    }}
                    render={({ field: { onChange, value, onBlur } }) => (
                      <DatePicker
                        onChange={onChange}
                        value={value}
                        onBlur={onBlur}
                      />
                    )}
                  />
                </div>

                <p className="text-danger fs-6 fw-light">
                  {errors.appointment_date?.message}
                </p>

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
};

export default Appointment;
