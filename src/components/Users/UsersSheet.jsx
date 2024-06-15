import axios from "axios";
import React, { useState, useEffect } from "react";
import ChangeUserStatusModal from "./ChangeUserStatusModal";

const UsersSheet = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const getAllUsers = (page) => {
    console.log(page)
    axios.post(`${process.env.REACT_APP_BASE_URL}fetch_all_users?page=${page}`)
      .then((res) => {
        setAllUsers(res.data.users.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        return err;
      });
  };


  useEffect(() => {
    getAllUsers(currentPage);
  }, [currentPage]);

  function AllUsers({ items, index }) {
    const [userID, setUserID] = useState("");
    const [showChangeUserStatusModal, setShowChangeUserStatusModal] = useState(false);

    return (
      <>
        <tr>
          <td>{items.id}</td>
          <td>{items.name}</td>
          <td>{items.email}</td>
          <td>{items.phone}</td>
          {
            items.status === 'active'?
        <td className="text-primary">{items.status}</td>
        :
        <td className="text-danger">{items.status}</td>

          }
          <td>{items.kyc}</td>
          <td>{items.loan}</td>
          <td>{items.Idate}</td>

          <td>
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
                    setShowChangeUserStatusModal(true);
                    setUserID(items.id);
                  }}
                >
                  <i className="bx bx-edit-alt me-1" /> Change Status
                </button>
                {/* <button
                  className="dropdown-item"
                  onClick={() => deleteBankDetails(items.bank_id, index)}
                >
                  <i className="bx bx-trash me-1" /> Delete
                </button> */}
              </div>
            </div>
          </td>
        </tr>
        {
              showChangeUserStatusModal === true ?
              <ChangeUserStatusModal
              userID = {userID}
              showChangeUserStatusModal={showChangeUserStatusModal}
              setShowChangeUserStatusModal = {setShowChangeUserStatusModal}
              getAllUsers = {getAllUsers}
              />
              :
              null
            }
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
              <span className="text-muted fw-light">Users Sheet</span>{" "}
            </h4>
            <div className="card">
              <h5 className="card-header">Users Sheet</h5>
              <div className="table-responsive text-nowrap">
                {
                
                isLoading ?
                (
                    <h3 className='fw-bold text-center'>Loading...</h3>
                  ) :
                allUsers && allUsers.length > 0 ? (
                  <table className="table">
                    <thead>
                      <tr className="text-center">
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>KYC</th>
                        <th>Loan</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0 table-responsive text-center">
                      {allUsers?.map((items, index) => {
                        return <AllUsers items={items} index={index} />;
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
  );
};

export default UsersSheet;
