import axios from 'axios';
import React,{useState} from 'react';
import { toast } from "react-toastify";
import Modal from 'react-bootstrap/Modal';
import "react-toastify/dist/ReactToastify.css";

const ApproveTransactionModal = ({ID , showApproveTransactionModal , setShowApproveTransactionModal , getTransactionList}) => {
    const [loading , setLoading] = useState(false);

    function submitUserTransactionApproval(){
        setLoading(true)
          const IDObj = {
            transaction_id:ID
          }
          axios.post(`${process.env.REACT_APP_BASE_URL}approve-transaction`, IDObj)
          .then((res)=>{
            if(res.data.status === '200'){
                toast.info("Transaction Approved!")
                getTransactionList()
        
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
            toast.warn("Something went wrong, while approving transaction !")
          }
          })
    
      
      }
  return (
    <>
                  <Modal show={showApproveTransactionModal} >
        <Modal.Header >
          <Modal.Title> <i className="fa-solid fa-person-circle-check"/> &nbsp;Approving Transaction -{ID}  </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to approve transaction for this user? </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-sm btn-outline-dark' onClick={()=>setShowApproveTransactionModal(!showApproveTransactionModal)}>
            Close
          </button>
              
        {
          loading ?
          <div className="spinner-border text-primary float-end" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        
        :
          <button className='btn btn-sm btn-outline-primary' onClick={submitUserTransactionApproval}>
            Submit
          </button>
}
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default ApproveTransactionModal