import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "../../api/axios";
import Confirmation from "./Confirmation";
import { ImBin2 } from "react-icons/im";
import Table from "react-bootstrap/Table";

const ShowAppointment = ({ show, handClick, token, user }) => {
  const [appointments, setAppointment] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [id, setId] = useState(0);

  const handleClick = () => {
    setId();
    setConfirm(!confirm);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
   
        const response = await axios.get(
          `https://hms-1-1kdd.onrender.com:3001/${user}/appointment/all`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAppointment(response.data.message);
      } catch (error) {
        console.error("Error fetching Messages:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Modal
      show={show}
      onHide={handClick}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Appointment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Appointment Id</th>
              <th>Doctor Id</th>
              <th>Patient Id</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={appointment.id}>
                <td>{index + 1}</td>
                <td>{appointment.appointment_id}</td>
                <td>{appointment.doctor_id}</td>
                <td>{appointment.patient_id}</td>
                <button
                  className="del-btn"
                  onClick={() => {
                    setId(appointment.appointment_id);

                    setConfirm(true);
                  }}
                >
                  <ImBin2 color="red" />
                </button>
              </tr>
            ))}
          </tbody>
        </Table>
        <Confirmation
          show={confirm}
          handleClick={handleClick}
          id={id}
          token={token}
          user={user}
          target={"appointment"}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handClick}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowAppointment;
