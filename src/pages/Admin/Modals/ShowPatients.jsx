import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "../../../api/axios";
import { ImBin2 } from "react-icons/im";
import "./ShowPatients.css";
import Confirmation from "./Confirmation";

const ShowPatients = ({ show, handClick }) => {
  const [patients, setPatients] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [id, setId] = useState(0);
  const data = localStorage.getItem("data");
  const parsedData = JSON.parse(data);
  const token = parsedData.data.token;
  const handleClick = () => {
    setConfirm(!confirm);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/doctor/patient/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchData();
  }, [handleClick]);

  return (
    <Modal
      show={show}
      onHide={handClick}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Patients</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ol>
          {patients.map((patient) => (
            <div
              className="d-flex justify-content-between p-2"
              key={patient.id}
            >
              <li>{`${patient.first_name} ${patient.last_name}`}</li>
              <button
                className="del-btn"
                onClick={() => {
                  setId(patient.id);
                  setConfirm(true);
                }}
              >
                <ImBin2 color="red" />
              </button>
            </div>
          ))}
        </ol>

        {
          <Confirmation
            show={confirm}
            handleClick={handleClick}
            id={id}
            token={token}
          />
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handClick}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowPatients;
