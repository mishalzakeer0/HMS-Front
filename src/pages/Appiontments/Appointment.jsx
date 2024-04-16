import React from 'react'
import {} from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import seth from "../assets/seth.jpg"
const Appointment = () => {
  return (
    <>
        <div className="d-flex">
        <div>
        <h1 className="text-dark" style={{fontSize: '3vw'}}>
          Book an <h1 className="text-primary" style={{fontSize: '3vw'}}>Appointment</h1> online
        </h1>
        <p className='text-secondary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam sit quo reiciendis repudiandae reprehenderit ea earum? Cupiditate veritatis tempora laborum error a quas laudantium quos labore, unde fuga voluptas!
        </p>
        <h6> <ArrowRightCircleFill color='#0d6efd'/> Medic is your reliable health care partner.</h6>
        <h6> <ArrowRightCircleFill color='#0d6efd'/> Expert care, your well-being</h6>
      </div>
      <div className="container">
        <img src={seth} alt="seth img" style={{maxHeight: '500px'}}/>
      </div>
        </div>
    </>
  );
}

export default Appointment
