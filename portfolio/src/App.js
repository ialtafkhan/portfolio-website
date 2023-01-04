import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Project from './pages/Project'
import ProjectDisplay from './pages/ProjectDisplay'
import Footer from './components/Footer'
function App() {
  return (
    <div className='App' >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Project />} />
          <Route path='//project/:id' element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
