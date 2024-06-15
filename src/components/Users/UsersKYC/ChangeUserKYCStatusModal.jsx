import axios from 'axios';
import React,{useState} from 'react';
import { toast } from "react-toastify";
import Modal from 'react-bootstrap/Modal';
import "react-toastify/dist/ReactToastify.css";

const ChangeUserKYCStatusModal = ({ID , showChangeUserKYCStatusModal,setShowChangeUserKYCStatusModal,getAllKYCUsers}) => {
    const [loading , setLoading] = useState(false);
    function submitUserKYCApproval(){
        setLoading(true)
          const IDObj = {
            user_id:ID
          }
          axios.post(`${process.env.REACT_APP_BASE_URL}change_status_user_data`, IDObj)
          .then((res)=>{
            if(res.data.status === '200'){
                toast.info("User Updated!")
                getAllKYCUsers()
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
          <Modal show={showChangeUserKYCStatusModal} >
        <Modal.Header >
          <Modal.Title> <i className="fa-solid fa-person-circle-check"/> &nbsp;Approving User -{ID}  </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to approve this user? </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-sm btn-outline-dark' onClick={()=>setShowChangeUserKYCStatusModal(!showChangeUserKYCStatusModal)}>
            Close
          </button>
              
        {
          loading ?
          <div className="spinner-border text-primary float-end" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        
        :
          <button className='btn btn-sm btn-outline-primary' onClick={submitUserKYCApproval}>
            Submit
          </button>
}
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default ChangeUserKYCStatusModal