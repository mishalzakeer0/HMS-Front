import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "../../api/axios";
import { ImBin2 } from "react-icons/im";
import "./ShowPatients.css";
import Confirmation from "./Confirmation";
import Table from "react-bootstrap/Table";

const ShowDoctor = ({ show, handClick, token, user }) => {
  const [doctors, setDoctors] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [id, setId] = useState(0);

  const handleClick = () => {
    setConfirm(!confirm);
  };

  useEffect(() => {
    const fetchData = async (token) => {
      try {

        const response = await axios.get(
          `https://hms-1-1kdd.onrender.com:3001/${user}/doctor/all`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDoctors(response.data.message);
        // console.log(response.data.message, "dataof dr");
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchData(token);
  }, [confirm]);

  return (
    <Modal
      show={show}
      onHide={handClick}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Doctor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Doctor Id</th>
              <th>Doctor Name</th>
              <th>Specializtion</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={doctor.id}>
                <td>{index + 1}</td>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.specialization}</td>
                <button
                  className="del-btn"
                  onClick={() => {
                    setId(doctor.id);

                    setConfirm(true);
                  }}
                >
                  <ImBin2 color="red" />
                </button>
              </tr>
            ))}
          </tbody>
        </Table>

        {
          <Confirmation
            show={confirm}
            handleClick={handleClick}
            id={id}
            token={token}
            user={user}
            target={"doctor"}
          />
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handClick}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowDoctor;
