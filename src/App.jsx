import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import Leave from './pages/Leave';
import Navbar from './components/Navbar';



function App() {
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path='/' element={<Login/>}/>

        <Route path='/dashboard' element={<Dashboard/>}/>

        <Route path='/employees' element={<Employees/>}/>
        
        <Route path='/attendance' element={<Attendance/>}/>

        <Route path='/leave' element={<Leave/>}/>


      </Routes>

    </BrowserRouter>
  );
}

export default App