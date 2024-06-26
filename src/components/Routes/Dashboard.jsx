import Forms from "../Forms/Forms";
import Sheets from "../Sheets/Sheets";
import Navbar from "../Layout/Navbar";
import Sidebar from "../Layout/Sidebar";
import React, { useState} from "react";

import SearchSection from "../SearchOpenAi/SearchSection";

import Users from '../Users/UsersSheet';
import UsersKYCSheet from "../Users/UsersKYC/UsersKYCSheet";

import LoanSheet from "../Loans/LoanSheet";
import TransactionSheet from "../Transaction/TransactionSheet";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };




  return (
    <>
    <Router>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar isVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
          <div className="layout-page">
            <Navbar toggleSidebar={toggleSidebar} />
            <Routes>
            <Route path="/" element={<SearchSection />}/>  
            <Route path="/Users" element={<Users />}/>  
            <Route path="/UsersKYCSheet" element={<UsersKYCSheet />}/>

            <Route path="/LoanSheet" element={<LoanSheet />}/>  
            <Route path="/TransactionSheet" element={<TransactionSheet />}/>  
            
            <Route path="/Forms" element={<Forms />}/>   
            <Route path="/Sheets" element={<Sheets />}/>      
            </Routes>  
          </div>
        </div>
      </div>
      </Router>
    </>
  );
};

export default Dashboard;
