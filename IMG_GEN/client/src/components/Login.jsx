import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const [state, setState] = useState('Login');
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const SubmitHandler = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email.trim() || !password.trim()) {
      setErrorMsg('Please enter email and password.');
      return;
    }

    try {
      if (state === 'Login') {
        const { data } = await axios.post(`${backendUrl}/api/users/login`, {
          email: email.trim(),
          password,
        });

        if (data?.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
          toast.success('Logged in successfully');
        } else {
          setErrorMsg(data?.message || 'Login failed');
          toast.error(data?.message || 'Login failed');
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/users/register`, {
          name: name.trim(),
          email: email.trim(),
          password,
        });

        if (data?.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
          toast.success('Account created');
        } else {
          setErrorMsg(data?.message || 'Registration failed');
          toast.error(data?.message || 'Registration failed');
        }
      }
    } catch (err) {
      const serverMessage =
        err?.response?.data?.message || err.message || 'Something went wrong';
      setErrorMsg(serverMessage);
      toast.error(serverMessage);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative flex flex-col md:flex-row bg-gradient-to-r from-white via-teal-50 to-orange-50 rounded-2xl shadow-2xl overflow-hidden w-[95%] max-w-3xl"
      >
        {/* Left section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-b from-teal-100 to-orange-100 p-10 w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">PIXORA</h2>
          <p className="mt-4 text-gray-600 text-center">
            Turn your imagination into stunning AI-powered visuals.
          </p>
          <img
            src={assets.profile_icon}
            alt="Illustration"
            className="w-32 h-32 mt-6 opacity-80"
          />
        </div>

        {/* Right section */}
        <div className="flex flex-col justify-center p-8 md:p-10 w-full md:w-1/2 relative">
          {/* Close button */}
          <img
            src={assets.cross_icon}
            alt="close"
            onClick={() => setShowLogin(false)}
            className="absolute top-4 right-4 w-5 h-5 cursor-pointer"
          />

          <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            {state === 'Login' ? 'Welcome Back' : 'Create an Account'}
          </h1>
          <p className="text-sm text-gray-500 mb-6 text-center">
            {state === 'Login'
              ? 'Please sign in to continue'
              : 'Join Pixora and start creating'}
          </p>

          <form onSubmit={SubmitHandler} className="flex flex-col gap-4">
            {state !== 'Login' && (
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Full Name"
                className="border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-teal-400 outline-none"
                required
              />
            )}

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              className="border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-teal-400 outline-none"
              required
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-teal-400 outline-none"
              required
            />

            {errorMsg && (
              <p className="text-sm text-red-600 text-center">{errorMsg}</p>
            )}

            <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg transition-all duration-300">
              {state === 'Login' ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm">
            {state === 'Login' ? (
              <>
                Don’t have an account?{' '}
                <span
                  className="text-teal-600 cursor-pointer font-medium"
                  onClick={() => {
                    setState('Sign Up');
                    setErrorMsg('');
                  }}
                >
                  Sign up
                </span>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <span
                  className="text-teal-600 cursor-pointer font-medium"
                  onClick={() => {
                    setState('Login');
                    setErrorMsg('');
                  }}
                >
                  Login
                </span>
              </>
            )}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
