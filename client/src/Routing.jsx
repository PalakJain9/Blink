import React from 'react'
import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import App from './App.jsx'
import Retrieve from './components/retrieve/Retrieve.jsx';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} exact/>
        <Route path='/:shortCode' element={<Retrieve />} />
        <Route path='*' element={<div>page not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing