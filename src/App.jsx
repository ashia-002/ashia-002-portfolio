import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Hero from './Section/Hero'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects';
import { Footer } from "./Section/Footer";
import Navbar from './Section/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
      <Footer/>

    </Router>
  )
}

export default App
