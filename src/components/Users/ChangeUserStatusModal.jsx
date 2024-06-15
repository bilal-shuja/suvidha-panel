import axios from 'axios';
import React,{useState} from 'react';
import { toast } from "react-toastify";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "react-toastify/dist/ReactToastify.css";

const ChangeUserStatusModal = ({userID , showChangeUserStatusModal , setShowChangeUserStatusModal , getAllUsers}) => {
  
    const [selectedStatusValue, setSelectedStatusValue] = useState('');
    const [loading , setLoading] = useState(false);


  const handleChange = (e) => {
    setSelectedStatusValue(e.target.value);
  }
  function submitUserStatus(){
    setLoading(true)
      const userStatusObj = {
        status:selectedStatusValue
      }
      axios.post(`${process.env.REACT_APP_BASE_URL}users/${userID}`, userStatusObj)
      .then((res)=>{
        if(res.data.status === '200'){
            toast.info("Status Updated!")
            getAllUsers()
    
            setLoading(false)
          
        }
        else {
          setLoading(false)
          throw new toast.error("Can't submit items!");
        }
      })
    .catch((error)=>{
      if(error){
        setLoading(false)
        toast.warn("Something went wrong, while updating status !")
      }
      })

  
  }



    return (
    <>
  <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show = {showChangeUserStatusModal}
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
        <i className="fa-solid fa-bell"/>  Change Status - {userID}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Select Status</h5>

        <div className="d-flex">
        <Form.Check 
         label="Active"
        type="radio"
        aria-label="radio 1"
        name="status"
        value="active"
        checked={selectedStatusValue === 'active'}
        onChange={handleChange}
        />
    &nbsp; &nbsp;
        <Form.Check 
         label="Deactive"
        type="radio"
         aria-label="radio 2"
         name="status"
         value="deactivated"
         checked={selectedStatusValue === 'deactivated'}
         onChange={handleChange}
        />

        </div>
 
        
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-sm btn-outline-dark' onClick={()=>setShowChangeUserStatusModal(!showChangeUserStatusModal)}>Close</button>
        
        {
          loading ?
          <div className="spinner-border text-primary float-end" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        
        :
        <button className='btn btn-sm btn-outline-primary'
        onClick={submitUserStatus}
        >Submit</button>
}
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default ChangeUserStatusModal