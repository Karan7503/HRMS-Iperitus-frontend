import React from 'react'
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";

import Login from './pages/Login';
import Register from "./pages/Register";
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import Leave from './pages/Leave';

import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

import ManageLeave from "./pages/admin/ManageLeave";
import ManageEmployees from './pages/admin/ManageEmployees';
import ManageAttendance from './pages/admin/ManageAttendance';
import WelcomeCard from './components/dashboard/WelcomeCard';
import AllAttendance from './pages/admin/AllAtendance';

function App() {

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const isLoginPage = location.pathname === "/";
 

  return (

    <BrowserRouter>

      <div className="min-h-screen flex flex-col bg-bgMain">

        {/* {!hideNavbar && <Navbar />} */}
        <Navbar/>
        

        {/* Page content */}
        <main className="flex-1">
          {/* {!isLoginPage && <WelcomeCard role={role}/>} */}
          

          <Routes>

            <Route path="/register" element={<Register />} />
            
            <Route path='/' element={<Login/>}/>

            <Route path='/dashboard' element={<Dashboard/>}/>

            <Route path='/employees' element={<Employees/>}/>
            
            <Route path='/attendance' element={<Attendance/>}/>
            {/* <Route path="/mark-attendance" element={<Attendance />} /> */}
            <Route path="/all-attendance" element={<AllAttendance />} />

            <Route path='/leave' element={<Leave/>}/>

            <Route path="/admin/employees" element={<ManageEmployees/>} />

            <Route path="/admin/attendance" element={<ManageAttendance/>} />

            <Route path="/admin/leave" element={<ManageLeave/>} />

          </Routes>

        </main>

        {token && <Footer/>}

      </div>

    </BrowserRouter> 

  );
}

export default App;