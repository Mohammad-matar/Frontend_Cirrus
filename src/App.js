import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home'
import Student from './Pages/Student';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
