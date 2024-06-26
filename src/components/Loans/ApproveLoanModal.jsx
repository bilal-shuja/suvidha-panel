import axios from 'axios';
import React,{useState} from 'react';
import { toast } from "react-toastify";
import Modal from 'react-bootstrap/Modal';
import "react-toastify/dist/ReactToastify.css";

const ApproveLoanModal = ({ID , showApproveLoanModal , setShowApproveLoanModal , getLoanList}) => {
    const [loading , setLoading] = useState(false);

    function submitUserLoanApproval(){
        setLoading(true)
          const IDObj = {
            loan_id:ID
          }
          axios.post(`${process.env.REACT_APP_BASE_URL}approveLoan`, IDObj)
          .then((res)=>{
            if(res.data.status === '200'){
                toast.info("Loan Approved!")
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
            toast.warn("Something went wrong, while approving loan !")
          }
          })
    
      
      }
  return (
    <>
              <Modal show={showApproveLoanModal} >
        <Modal.Header >
          <Modal.Title> <i className="fa-solid fa-person-circle-check"/> &nbsp;Approving Loan -{ID}  </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to approve Loan for this user? </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-sm btn-outline-dark' onClick={()=>setShowApproveLoanModal(!showApproveLoanModal)}>
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

export default ApproveLoanModal