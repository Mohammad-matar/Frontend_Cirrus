import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home'
import Student from './Pages/Student';
import './App.css';
import Homework from './Pages/HomeWork';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/homework" element={<Homework />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
