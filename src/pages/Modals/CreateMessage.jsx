import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm, Controller, useFormState } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateMessage = ({ show, handClick, token, user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
  });
  const { isValid } = useFormState({ control });
  const notifySuccess = () =>
    toast.success("Message Successfully Created", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifyError = () =>
    toast.error("Error While Creating Message", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      theme: "colored",
    });

  async function CreateMsg(formData) {
    try {
      const response = await axios.post(
        `http://localhost:3001/${user}/message/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      notifySuccess();
    } catch (error) {
      notifyError();
      console.error(error);
    }
  }

  return (
    <>
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
      <Modal show={show} onHide={handClick}>
        <Form onSubmit={handleSubmit(CreateMsg)}>
          <Modal.Header closeButton>
            <Modal.Title>Create Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="first_name">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Mishal"
                autoFocus
                {...register("first_name", {
                  required: "Name is required",
                })}
              />
              <p className="text-danger fs-6 fw-light">
                {errors.first_name?.message}
              </p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="last_name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Zakeer"
                autoFocus
                {...register("last_name", {
                  required: "Last Name is required",
                })}
              />
              <p className="text-danger fs-6 fw-light">
                {errors.last_name?.message}
              </p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="age">
              <Form.Label> Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="5"
                min={0}
                max={120}
                autoFocus
                {...register("age", {
                  required: "Age is required",
                })}
              />
              <p className="text-danger fs-6 fw-light">{errors.age?.message}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="radio">
              <Form.Check
                type="radio"
                label="Male"
                id="Male"
                value={"Male"}
                name="nation"
                {...register("gender", {
                  required: "Gender is required",
                })}
              />
              <Form.Check
                type="radio"
                label="Female"
                id="Uruguay"
                value={"Female"}
                name="nation"
                {...register("gender", {
                  required: "Gender is required",
                })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                {...register("message", {
                  required: "Message is required",
                })}
              />
            </Form.Group>
            <p className="text-danger fs-6 fw-light">
              {errors.message?.message}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handClick}>
              Close
            </Button>
            <Button
              type="submit"
              variant="primary"
              onClick={handClick}
              disabled={!isValid}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Form>
        <DevTool control={control} />
      </Modal>
    </>
  );
};
export default CreateMessage;
