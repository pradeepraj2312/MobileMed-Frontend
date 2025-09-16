import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo1 from '../assets/image/logo1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './StyleSheet/App.css'
import { useEffect } from 'react';


import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
};

function Main() {
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <motion.div
            className="main"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.5 }}
        >
        <div onClick={() => navigate('/landing')} className='main'>
            <div className="main">
                <div className="main_page" data-aos="fade-up">
                    <img src={logo1} alt="logo" />
                    <p className="title1" data-aos="zoom-in">MobileMed</p>
                    <p className="title2" data-aos="fade-right">Smart care. Anywhere.</p>
                    <p className="title2" >Manage mobile clinics, patients and reports.</p>
                </div>
            </div>

        </div>
        </motion.div>


    )
}

export default Main