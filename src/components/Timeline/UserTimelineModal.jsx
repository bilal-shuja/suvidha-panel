import './UserTimeline.css';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from "react";


const UserTimelineModal = ({userID , showUserTimelineModal , setShowUserTimelineModal}) => {
  const [userTimeline , setUserTimeline] = useState([]);

  const getUsersTimeline = () => {
    const useridObj = {
      user_id :userID
    }
    axios.post(`${process.env.REACT_APP_BASE_URL}user-data`, useridObj)
      .then((res) => {
        setUserTimeline(res.data.message);
      })
      .catch((err) => {
        return err;
      });
  }


  useEffect(() => {
    getUsersTimeline()
  }, [])
  
  return (
    <>
<Modal
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      show={showUserTimelineModal}
    >
      <Modal.Header >
        <Modal.Title className="contained-modal-title-vcenter text-center">
         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <h2 className='text-center fw-bold'>"User Timeline"</h2>
        <div className="container">
  <div className="row">
    <div className="col-md-10">
      <ul className="cbp_tmtimeline">
        <li>
          <time className="cbp_tmtime" dateTime="2017-11-04T18:30"><span className="hidden">{userTimeline?.Idate}</span> 
          {/* <span className="large">Now</span> */}
          </time>
          <div className="cbp_tmicon"><i className="fa fa-user" /></div>
          <div className="cbp_tmlabel empty"> 
            <span>Name:&nbsp;&nbsp; {userTimeline?.name}</span>
            <div>Email:&nbsp;&nbsp; {userTimeline?.email}</div>
            <div>Phone:&nbsp;&nbsp; {userTimeline?.phone}</div>
            <div>Status:&nbsp;&nbsp; {userTimeline?.status}</div>

          
           </div>

        </li>
        <li>
          <time className="cbp_tmtime" dateTime="2017-11-04T03:45"><span>User's Info</span> </time>
          <div className="cbp_tmicon bg-info"><i className="fa-solid fa-address-card" /></div>
          <div className="cbp_tmlabel">
            <h2><a href="#c">User# {userTimeline.user_data?.user_id}</a> </h2>

            <div className="d-flex mb-2 fw-semibold">
            <span>Name: {userTimeline.user_data?.first_name}</span> &nbsp;
            <span className='me-3'>{userTimeline.user_data?.last_name}</span>
            <span className='me-3'>DOB: {userTimeline.user_data?.dob}</span> &nbsp;
            <span className='me-3'>Status: {userTimeline.user_data?.status}</span>
            <span className='me-3'>Employment Type: {userTimeline.user_data?.employment_type}</span>
            </div>

            <span className='me-3 fw-semibold'>Address:&nbsp;&nbsp; {userTimeline.user_data?.address}</span>

            <div className="d-flex mt-2 fw-semibold">
            <span className='me-3'>Income: {userTimeline.user_data?.monthly_income}</span> &nbsp;
            <span> Account No# {userTimeline.user_data?.account_number}</span>
            </div>




          </div>
        </li>
        <li>
          <time className="cbp_tmtime" dateTime="2017-11-03T13:22"><span>LOANS</span></time>
          <div className="cbp_tmicon bg-green"> <i className="fa-solid fa-money-bill" /></div>
          <div className="cbp_tmlabel">
            <div className="row">
            {/* <h2><a href="javascript:void(0);">Job Meeting</a></h2> */}
            {
              userTimeline.loans?.length > 0 ?

              userTimeline?.loans.map((item , index)=>{
                return(
                  <div className='col-lg-6 mb-3'>
                    <ul>
                    <li className="text-warning">Loan #{index+1}</li>
                    <li>Loan amount:&nbsp; {item.loan_amount}</li>
                    
                    <li>Amount Left:&nbsp; {item.amount_left}</li>
                    <li>Duration: &nbsp; {item.duration}</li>
                    <li>loan Date: &nbsp; {item.loan_date}</li>
                    <li>Status: &nbsp; {item.status === "approved"? <span className='text-info'>{item.status}</span>: 
                    <span className='text-danger'>{item.status}</span>
                    }</li>

                    </ul>

                  
                  </div>
                )
                
              })
              :

              <p> <strong>No Data Found!</strong> </p>

            }
            </div>
          </div>
        </li>
        
        <li>
          <time className="cbp_tmtime" dateTime="2017-10-22T12:13"> </time>
          <div className="cbp_tmicon bg-primary"><i className="fa-solid fa-stop" /></div>
          {/* <div className="cbp_tmlabel">
            <h2><a href="javascript:void(0);">Arlind Nushi</a> <span>checked in at</span> <a href="javascript:void(0);">New York</a></h2>
            <blockquote>
              <p className="blockquote blockquote-primary">
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."                                    
                <br />
                <small>
                  - Isabella
                </small>
              </p>
            </blockquote>
            <div className="row clearfix">
              <div className="col-lg-12">
                <div className="map m-t-10">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91477011208!2d-74.11976308802028!3d40.69740344230033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1508039335245" frameBorder={0} style={{border: 0, width: '100%'}} allowFullScreen />
                </div>
              </div>
            </div>        					
          </div> */}
        </li>
      
      </ul>  
    </div>
  </div>
</div>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-outline-secondary' onClick={()=>setShowUserTimelineModal(!showUserTimelineModal)}>Close</button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default UserTimelineModal