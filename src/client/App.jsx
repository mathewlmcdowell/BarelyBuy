import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Faker from './components/Faker'

function App() {
  const [count, setCount] = useState(0);
 
  return (
    <>
    <div>
      <Faker />
    </div>
      <div>
        <Routes>
          <Route path ='/' element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
