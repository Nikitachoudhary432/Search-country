import React from 'react'
// import CallApiAxios from './Colorlip/callApiAxios'
// import ApiState from './Colorlip/apiState'
// import DataTable from './Colorlip/dataTable'
// import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './webExample/About'
import Home from './webExample/Home'
import Blog from './webExample/Blog'
import Contact from './webExample/Contact'
import Navbar from './webExample/navbar'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import './App.css'
import CardDetail from './webExample/CardDetail'



const App = () => {
  return (
    <div>
   
      <Router>
        <Routes>
        <Route path="/" element={<About/>} />
          <Route path="/carddetail/:name" element={<CardDetail/>} />
        </Routes>
      </Router>

    </div>

    
  )
}

export default App

