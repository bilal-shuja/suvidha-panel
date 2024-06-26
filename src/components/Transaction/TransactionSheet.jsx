import axios from "axios";
import React, { useState, useEffect } from "react";
import ApproveTransactionModal from "./ApproveTransactionModal";

const TransactionSheet = () => {
    const [transactionList, setTransactionList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
  
    const getTransactionList = (page) => {
      axios.post(`${process.env.REACT_APP_BASE_URL}transactions?page=${page}`)
        .then((res) => {
            setTransactionList(res.data.transactions);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          return err;
        });
    };


   
  
    useEffect(() => {
        getTransactionList(currentPage);
    }, [currentPage]);
  
    function TransactionList({ items, index }) {
      const [ID, setID] = useState("");
      const [showApproveTransactionModal, setShowApproveTransactionModal] = useState(false);
    //   const [showRejectLoanModal , setRejectLoanModal] = useState(false);
    //   const [showUserTimelineModal, setShowUserTimelineModal] = useState(false);
  
      return (
        <>
          <tr key={items.id}>
            <td>{items.id}</td>
            <td>{items.user_name}</td>
            <td>{items.transaction_id}</td>
            <td>{items.amount_paid}</td>
            <td>{items.amount_paid_type}</td>
            <td>{items.loan_amount}</td>
            {
              items.status === 'approved'?
              <td className="text-primary">{items.status}</td>
              :
              items.status === 'pending'? 
              <td className="text-warning">{items.status}</td>
              :
              <td className="text-danger">{items.status}</td>
  
            }
            <td>{items.with_interest}</td>
            <td>{items.applied_interest === null ? "not found":items.applied_interest}</td>
            <td>{items.date}</td>
            {/* <td>
              <button className="btn btn-sm btn-outline-info"
              onClick={()=>{
                setUserID(items.user_id)
                setShowUserTimelineModal(true)

              }
              }
              >
                <i className="fa-solid fa-timeline"/>
              </button>
            </td> */}
  
        
           <td>
           {items.status === "approved" ? null : (
           <div className="dropdown">
             <button
               type="button"
               className="btn p-0 dropdown-toggle hide-arrow"
               data-bs-toggle="dropdown"
             >
               <i className="bx bx-dots-vertical-rounded" />
             </button>
             <div className="dropdown-menu">
               <button
                 className="dropdown-item"
                 onClick={() => {

                    setID(items.id);
                    setShowApproveTransactionModal(true);
                 }}
               >
                 <i className="bx bxs-user-check me-1" /> Approve Transaction
               </button>
{/* 

               <button
                 className="dropdown-item"
                 onClick={() => {
                     setRejectLoanModal(true);
                   setID(items.id);
                 }}
               >
                 <i className="bx bxs-user-x me-1" /> Reject Loan
               </button> */}
             </div>
           </div>
          )
        }
         </td>
 
           
          </tr>
          {
                showApproveTransactionModal === true ?
                <ApproveTransactionModal
                ID = {ID}
                showApproveTransactionModal={showApproveTransactionModal}
                setShowApproveTransactionModal = {setShowApproveTransactionModal}
                getTransactionList = {getTransactionList}
                />
                :
                null
              }
          {/*

              {
                showRejectLoanModal === true ?
                <RejectLoanModal
                ID = {ID}
                showRejectLoanModal={showRejectLoanModal}
                setRejectLoanModal = {setRejectLoanModal}
                getLoanList = {getLoanList}
                />
                :
                null
              }

              {
                showUserTimelineModal === true ?
                <UserTimelineModal
                userID = {userID}
                  showUserTimelineModal = {showUserTimelineModal}
                  setShowUserTimelineModal = {setShowUserTimelineModal}
                />
                :
                null
              } */}
        </>
      );
    }

  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const handlePreviousPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
  return (
    <>
        <div className="scroll-view-component scrollbar-secondary-component">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold">
              <span className="text-muted fw-light">Transaction Sheet</span>
            </h4>
            <div className="card">
              <h5 className="card-header">Transaction Sheet</h5>
              <div className="table-responsive text-nowrap">
                {
                
                isLoading ?
                (
                    <h3 className='fw-bold text-center'>Loading...</h3>
                  ) :
                  transactionList && transactionList.length > 0 ? (
                  <table className="table">
                    <thead>
                      <tr className="text-center">
                        <th>#</th>
                        <th>Name</th>
                        <th>Transaction ID</th>
                        <th>Paid Amount</th>
                        <th>Paid Amount Type</th>
                        <th>loan Amount</th>
                        <th>Status</th>
                        <th>With Interest</th>
                        <th>Apploed Interest</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0 table-responsive text-center">
                      {transactionList?.map((items, index) => {
                        return <TransactionList items={items} index={index} />;
                      })}
                    </tbody>
                  </table>
                ) : (
                  <h3 className="fw-bold text-center">No Data Found</h3>
                )
                
            }
        

                <div className="card-footer float-start">
                  <div className="pagination-controls text-center">
                    <button
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                      className="btn btn-primary btn-sm"
                    >
                      <i className="fa fa-arrow-left" />
                    </button>
                    <span className="mx-3">Page {currentPage}</span>
                    <button
                      onClick={handleNextPage}
                      className="btn btn-primary btn-sm"
                    >
                      <i className="fa fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default TransactionSheet