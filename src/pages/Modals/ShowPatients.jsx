import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "../../api/axios";
import { ImBin2 } from "react-icons/im";
import "./ShowPatients.css";
import Confirmation from "./Confirmation";
import Table from "react-bootstrap/Table";

const ShowPatients = ({ show, handClick, token, user }) => {
  const [patients, setPatients] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [id, setId] = useState(0);

  const handleClick = () => {
    setConfirm(!confirm);
  };

  useEffect(() => {
    const fetchData = async (token) => {
      try {
        const response = await axios.get(
          `http://localhost:3001/${user}/patient/all`,
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

    fetchData(token);
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
        <Modal.Title id="contained-modal-title-vcenter">Patients</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Patient Id</th>
              <th> Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={patient.id}>
                <td>{index + 1}</td>
                <td>{patient.id}</td>
                <td>{patient.first_name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>

                <button
                  className="del-btn"
                  onClick={() => {
                    setId(patient.id);

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
            target={"patient"}
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
