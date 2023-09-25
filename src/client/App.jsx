import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Faker from './components/Faker'
import Card from './components/Card'

export default function App(){

  return (
    <>
      <div>
        <Routes>
          <Route path ='/' element={<Faker />} />
        </Routes>
      </div>
    </>
  );
}
