import React,{useContext} from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
const GenerateBtn = () => {

    const { user, setShowLogin } = useContext(AppContext);
    const navigate = useNavigate();
    const onClickHandler = () => {
        if (user) {
            navigate('/generate');
        } else {
            setShowLogin(true);
        }
    }
        return (
            null
            // <motion.div
            //     initial={{ opacity: 0.2, y: 100 }}
            //     transition={{ duration: 1, delay: 0.2 }}
            //     whileInView={{ opacity: 1, y: 0 }}
            //     viewport={{ once: true }}
            //     className='pb-16 text-center'>
            //     <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>See the magic.Try now</h1>
            // </motion.div>
        )
    }
export default GenerateBtn;
