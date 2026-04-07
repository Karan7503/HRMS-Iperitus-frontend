import React from 'react'
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import Leave from './pages/Leave';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const token = localStorage.getItem("token");
  // const location = useLocation();

  // const hideNavbar = location.pathname === "/";

  return (

    <BrowserRouter>

      <div className="min-h-screen flex flex-col bg-bgMain">

        {/* {!hideNavbar && <Navbar />} */}
        <Navbar/>

        {/* Page content */}
        <main className="flex-1">

          <Routes>

            <Route path='/' element={<Login/>}/>

            <Route path='/dashboard' element={<Dashboard/>}/>

            <Route path='/employees' element={<Employees/>}/>
            
            <Route path='/attendance' element={<Attendance/>}/>

            <Route path='/leave' element={<Leave/>}/>

          </Routes>

        </main>

        {token && <Footer/>}

      </div>

    </BrowserRouter> 

  );
}

export default App;