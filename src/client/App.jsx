import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import './style.css'
import Login from './components/Login';

export default function App(){

  return (
    <>
      <div>
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/Login' element={<Login />} />
        </Routes>
      </div>
    </>
  );
}
