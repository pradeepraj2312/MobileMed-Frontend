import React from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import logo1 from '../assets/image/logo1.png'
import './StyleSheet/App.css'
// import { motion } from 'framer-motion';

// const pageVariants = {
//     initial: { opacity: 0, x: -100 },
//     animate: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: 100 },
// };
function Landing() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  })
  return (
    // <motion.div
    //   className="main"
    //   initial="initial"
    //   animate="animate"
    //   exit="exit"
    //   variants={pageVariants}
    //   transition={{ duration: 0.5 }}
    // >
    <div className='landing'>
      <div className="landing_page" data-aos="fade-up">
        <img src={logo1} alt="logo" data-aos="zoom-in" />
        <p className='title1' data-aos="fade-right">MobileMed</p>
        <p className='title2' data-aos="fade-left">Let’s get started</p>

        <Link to={'./login'}><button className='login' data-aos="flip-up">Login</button></Link>
        <Link to={'./signup'}><button className='signup' >Sign up</button></Link>
      </div>
    </div>

    // </motion.div>


  )
}

export default Landing