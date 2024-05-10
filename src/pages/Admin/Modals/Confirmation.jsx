import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from '../../../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Confirmation = ({show, handleClick, id, token, user, target}) => {
  const notifyError = () =>
  toast.error("Error While Delete ", {
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
const notifySuccess = () =>
  toast.success("Successfully Deleted", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

 
    const deleteConfirm = async (id, token)=>{
        try {
            // console.log(token,"keykeye")
            // console.log(user, "user")
            // console.log(id, "ideda")
            const response = await axios.delete(`http://localhost:3001/${user}/${target}/delete`,{
                headers:{
                    'Authorization': `Bearer ${token}`
                },
                data:{id:id},
                
                
            });
        
            // console.log(response)
            notifySuccess();
            handleClick()
          } catch (error) {
            notifyError()
            console.error("Error deleting patient:", error);
          }
    
      }
    
     
  return (
    <div>
        {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        // pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      /> */}
      <Modal
      show={show}
      onHide={handleClick}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirm delete!!!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Button onClick={handleClick}>NO</Button>
        <Button onClick={()=>{
            deleteConfirm(id,token)
        }} color='red'>Yes</Button>
      </Modal.Body>
     
    </Modal>
    </div>
  )
}

export default Confirmation
