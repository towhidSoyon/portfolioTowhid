// import React from 'react';
// import { motion } from 'framer-motion';

// const Hero = () => (
//   <motion.section
//     initial={{ opacity: 0, y: -50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//     className="min-h-screen flex items-center justify-center"
//   >
//     <div className="text-center px-6">
//       <h1 className="text-5xl font-bold mb-4">Towhidul Islam Sayon</h1>
//       <p className="text-xl mb-6">Mobile Application Developer</p>
//       <a href="#projects" className="inline-block px-6 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700">
//         View Projects
//       </a>
//     </div>
//   </motion.section>
// );

// export default Hero;


import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Illustration from "../../assets/illustration.svg";
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import whatsapp from '../../assets/whatsapp.svg';
import Hello from '../../assets/Hello.gif';
import './Hero.css'

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-black text-white"
    >
      {/* Hero Text */}
      <div className="flex flex-col space-y-4 max-w-lg mt-20 md:mt-0">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center space-x-2">
          <span>Hello</span>
          <img src={Hello} alt="Hello" className="w-6 h-6 inline" />
          <span>, I'm</span>
        </motion.p>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="text-5xl font-bold text-green-400">
          Towhidul Islam
        </motion.h1>

        <motion.h3 custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-3xl font-semibold">
          Android Developer 
        </motion.h3>

        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible" className="text-lg text-gray-300">
          Kotlin | Jetpack Compose | KMP
        </motion.p>

        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-block bg-green-400 text-black font-medium px-6 py-2 rounded-full cursor-pointer hover:bg-green-500 transition"
          >
            Contact
          </Link>
        </motion.div>

        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className="flex space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/towhid-soyon/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition" />
          </a>
          <a href="https://github.com/towhidSoyon" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" className="w-8 h-8 hover:scale-110 transition" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=8801521733203&text=Towhid+I+found+your+contact+through+portfolio+site.%0A%0A" target="_blank" rel="noreferrer">
  <img src={whatsapp} alt="WhatsApp" className="w-8 h-8 hover:scale-110 transition" />
</a>

        </motion.div>
      </div>

      {/* Hero Illustration */}
      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-12 md:mt-0"
      >
        <img src={Illustration} alt="Illustration" className="w-72 md:w-[400px] rounded-2xl shadow-lg hover:scale-105 transition" />
      </motion.div>
    </section>
  );
}

