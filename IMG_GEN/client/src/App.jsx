import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Home from './pages/Home'
import Credits from './pages/Credits'
import ImageGenerate from './pages/ImageGenerate'
import About from './pages/About'   // ✅ new import
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'

import { AppContext } from './context/AppContext'

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-18 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50 text-black'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      {showLogin && <Login/>}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buy' element={<Credits/>}/>
        <Route path='/generate' element={<ImageGenerate/>}/>
        <Route path='/about' element={<About/>}/>   {/* ✅ new route */}
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
