import axios from "axios";
import React, { useState, useEffect } from "react";
import ChangeUserKYCStatusModal from "./ChangeUserKYCStatusModal";

const UsersKYCSheet = () => {
  const [allKYCUsers, setAllKYCUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const getAllKYCUsers = (page) => {

    axios.get(`${process.env.REACT_APP_BASE_URL}users-data?page=${page}&status=${status}&search=${search}`)
      .then((res) => {
        setAllKYCUsers(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        return err;
      });
  };

  useEffect(() => {
    getAllKYCUsers(currentPage);
  }, [currentPage, status,search]);

  function AllKYCUsers({ items, index }) {
    const [ID, setID] = useState("");
    const [showChangeUserKYCStatusModal, setShowChangeUserKYCStatusModal] = useState(false);

    return (
      <>
        <tr key={items.id}>
          <td>{items.id}</td>
          <td>{items.first_name}</td>
          <td>{items.middle_name === null ? "Not found":items.middle_name}</td>
          <td>{items.last_name}</td>
          <td>{items.dob}</td>
          <td>{items.address}</td>
          {items.status === "approved" ? (
            <td className="text-primary">{items.status}</td>
          ) : (
            <td className="text-danger">{items.status}</td>
          )}

          <td>{items.reason === null ? "No Reason found" : items.reason}</td>
          <td>{items.employment_type}</td>
          <td>{items.monthly_income}</td>
          <td>{items.account_number}</td>
          {/* <td>{items.Idate}</td> */}

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
                      setShowChangeUserKYCStatusModal(true);
                      setID(items.user_id);
                    }}
                  >
                    <i className="bx bx-edit-alt me-1" /> Change Status
                  </button>
                </div>
              </div>
           )}
          </td>
        </tr>
        {showChangeUserKYCStatusModal === true ? (
          <ChangeUserKYCStatusModal
            ID={ID}
            showChangeUserKYCStatusModal={showChangeUserKYCStatusModal}
            setShowChangeUserKYCStatusModal={setShowChangeUserKYCStatusModal}
            getAllKYCUsers={getAllKYCUsers}
          />
        ) : null}
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
              <span className="text-muted fw-light">Users-KYC Sheet</span>{" "}
            </h4>
            <div className="card">
              <h5 className="card-header">Users-KYC Sheet</h5>
              <div className="table-responsive text-nowrap">
                <div className="row mt-2 mb-4 ms-2">
                  <div className="col-lg-3">
                    <label className="form-label fw-bold">Search*</label>
                    <input
                      type="text"
                      placeholder="Search..."
                      className={"form-control  border border-primary"}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>

                  <div className="col-lg-3">
                    <label className="form-label fw-bold">Status*</label>
                    <select
                      id="inputGroupSelect01"
                      className={
                        "form-select  border border-primary"
                      }
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="">Choose...</option>
                      <option value="approved">approved</option>
                      <option value="unapproved">unapproved</option>
                    </select>
                  </div>
                      {/* <div className="col-lg-3" style={{marginTop:"2em"}}>
                  <button className="btn btn-primary" onClick={getAllKYCUsers}>Search...</button>
                      </div> */}
                </div>
                {isLoading ? (
                  <h3 className="fw-bold text-center">Loading...</h3>
                ) : allKYCUsers && allKYCUsers.length > 0 ? (
                  <table className="table">
                    <thead>
                      <tr className="text-center">
                        <th>#</th>
                        <th>Name</th>
                        <th>Middle Name</th>
                        <th>last Name</th>
                        <th>DOB</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Reason</th>
                        <th>Employment Type</th>
                        <th>Income</th>
                        <th>Account Number</th>
                        <th>Actions</th>
           
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0 table-responsive text-center">
                      {allKYCUsers?.map((items, index) => {
                        return <AllKYCUsers items={items} index={index} />;
                      })}
                    </tbody>
                  </table>
                ) : (
                  <h3 className="fw-bold text-center">No Data Found</h3>
                )}

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

export default UsersKYCSheet;
