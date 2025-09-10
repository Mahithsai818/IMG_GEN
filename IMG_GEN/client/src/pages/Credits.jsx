import React, { useContext } from 'react';
import { assets, plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Credits = () => {
  const { user, backendUrl, loadCreditsData, token, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: 'Credits Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(backendUrl + '/api/users/verifypayment', response, { headers: { token } });
          if (data.success) {
            loadCreditsData();
            navigate('/');
            toast.success('Credits Added');
          }
        } catch (error) {
          toast.error(error.message);
        }
      },
    };

    if (!window.Razorpay) {
      toast.error("Razorpay SDK not loaded");
      return;
    }

    const rzp = new window.Razorpay(options);
    rzp.open();
    rzp.on('payment.failed', function (response) {
      toast.error("Payment failed. Please try again.");
      console.error(response.error);
    });
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
        return;
      }
      const { data } = await axios.post(backendUrl + '/api/users/payrazor', { planId }, { headers: { token } });
      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-teal-50 to-orange-50 min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 sm:px-12 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-gray-900">
          Choose Your Plan
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center justify-between text-center hover:shadow-2xl transition-all duration-500"
            >
              <p className="text-xl font-semibold text-gray-800">{item.id}</p>
              <p className="text-gray-500 mt-2">{item.desc}</p>
              <p className="mt-6 text-3xl font-bold text-gray-900">
                Rs {item.price} <span className="text-base font-medium text-gray-600">/ {item.credits} credits</span>
              </p>
              <button
                onClick={() => paymentRazorpay(item.id)}
                className="mt-10 w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold hover:from-indigo-500 hover:to-blue-600 transition-all duration-300"
              >
                {user ? "Purchase" : "Buy Now"}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Credits;
