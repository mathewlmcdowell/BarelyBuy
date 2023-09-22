import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import './style.css'

export default function App(){

  return (
    <>
      <div>
        <Routes>
          <Route path ='/' element={<Home />} />
        </Routes>
      </div>
    </>
  );
}
