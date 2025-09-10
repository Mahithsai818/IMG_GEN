import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='flex fixed top-0 left-0 justify-between items-center w-full py-2 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-teal-50 to-gray-50 shadow-md rounded-b-xl z-50'>
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <p className="text-xl sm:text-2xl font-bold text-gray-800 tracking-wide">
          PIXORA
        </p>
      </Link>

      <div>
        {user ? (
          <div className='flex items-center gap-5'>
            {/* ✅ About Page */}
            <Link 
              to="/about" 
              className='cursor-pointer px-4 py-2 rounded-full hover:shadow-lg transition-all'
            >
              About
            </Link>

            {/* ✅ Pricing */}
            {/* <p 
              onClick={() => navigate('/buy')} 
              className='cursor-pointer px-4 py-2 rounded-full hover:shadow-lg'
            >
              Pricing
            </p> */}

            {/* ✅ Credits */}
            <button 
              onClick={() => navigate('/buy')} 
              className='cursor-pointer px-4 py-2 rounded-full hover:shadow-lg transition-all'
            >
              <p>
                Credits left : {credit}
              </p>
            </button>

            {/* ✅ Profile + Greeting */}
            <div className='flex items-center gap-2 relative group'>
              {/* Show greeting if NOT on Home */}
              {location.pathname !== "/" && (
                <span className="text-sm font-medium text-gray-700">
                  Hi, {user.name || "User"}
                </span>
              )}
              
              <img 
                src={assets.profile_icon} 
                alt="Profile" 
                className='w-10 sm:w-10 lg:w-12 drop-shadow cursor-pointer' 
              />   

              {/* Dropdown */}
              <div className='absolute top-12 right-0 z-10 bg-white shadow-lg rounded px-8 py-2 hidden group-hover:block'>
                <ul className='cursor-pointer'>
                  <li onClick={logout}>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-6'>
            {/* About Page visible to guests */}
            <Link 
              to="/about" 
              className='cursor-pointer px-6 py-2 rounded-full hover:shadow-lg transition-all'
            >
              About
            </Link>

            <button 
              onClick={() => setShowLogin(true)} 
              className='bg-teal-500 text-sm text-white px-7 py-2 sm:px-10 rounded-full hover:bg-teal-600 transition duration-300'
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
