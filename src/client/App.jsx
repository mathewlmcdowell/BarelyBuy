import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0);
 
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

export default App;
