import axios from 'axios';
import React,{useState} from 'react';
import { toast } from "react-toastify";
import Modal from 'react-bootstrap/Modal';
import "react-toastify/dist/ReactToastify.css";
const RejectLoanModal = ({ID , showRejectLoanModal , setRejectLoanModal , getLoanList}) => {
    const [loading , setLoading] = useState(false);

    function submitUserLoanApproval(){
        setLoading(true)
          const IDObj = {
            status:"rejected"
          }
          axios.post(`${process.env.REACT_APP_BASE_URL}loans/${ID}`, IDObj)
          .then((res)=>{
            if(res.data.status === '200'){
                toast.error("Loan Rejected!")
                getLoanList()
        
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
        <Modal show={showRejectLoanModal} >
        <Modal.Header >
          <Modal.Title> <i className="fa-solid fa-person-circle-xmark"/> &nbsp;Reject Loan -{ID}  </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to reject Loan for this user? </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-sm btn-outline-dark' onClick={()=>setRejectLoanModal(!showRejectLoanModal)}>
            Close
          </button>
              
        {
          loading ?
          <div className="spinner-border text-primary float-end" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        
        :
          <button className='btn btn-sm btn-outline-primary' onClick={submitUserLoanApproval}>
            Submit
          </button>
}
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default RejectLoanModal