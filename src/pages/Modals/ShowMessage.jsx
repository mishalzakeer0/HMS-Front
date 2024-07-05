import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "../../api/axios";
import Confirmation from "./Confirmation";
import { ImBin2 } from "react-icons/im";
import Table from "react-bootstrap/Table";

const ShowMessage = ({ show, handClick, token, user }) => {
  const [messages, setMessages] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [id, setId] = useState(0);
  const handleClick = () => {
    setConfirm(!confirm);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(token, "tokenhere")
        const response = await axios.get(
          `https://hms-1-1kdd.onrender.com:3001/${user}/message/all`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        //   console.log(response.data.message, "msg")
        setMessages(response.data.message);
      } catch (error) {
        console.error("Error fetching Messages:", error);
      }
    };

    fetchData();
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
        <Modal.Title id="contained-modal-title-vcenter">Messages</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, index) => (
              <tr key={msg.id}>
                <td>{index + 1}</td>
                <td>{msg.first_name}</td>
                <td>{msg.age}</td>
                <td>{msg.gender}</td>
                <td>{msg.message}</td>
                <button
                  className="del-btn"
                  onClick={() => {
                    setId(msg.id);

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
          target={"message"}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handClick}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowMessage;
