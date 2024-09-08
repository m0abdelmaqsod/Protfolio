import React, { useEffect } from 'react';
import styles from './styles/home.module.css'
import { Link } from 'react-router-dom';
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import About from '../about/About';
import Skills from '../skills/Skills';
import Project from '../projects/Project';
import Contact from '../contact/Contact';
import Services from '../services/Services';




// ====== button download CV ====== //
const fileUrl = "http://localhost:3000/CVmoabdelmaqsod.pdf";
const fileName = "CV Mohamed AbdElmaqsod";


const Home = () => {
  document.title = "Portfolio";


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  // ====== handle button download CV ====== //
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };



  return (
    <>
      <section className={styles.home}>
        <div id='home' className={styles.divHeadHome}>
          <div className={styles.infoHome}>
            <h6>Frontend Developer</h6>

            <h1>
              <p>Hello I'm</p>
              <span>Mohamed AbdElmaqsod</span>
            </h1>

            <p className={styles.descHome}>I can work under constant pressure and implement projects well. I am also very patient I can work with tim , and I always refer to learning and increasing my understanding and my practical and intellectual experience</p>


            <div className={styles.allBtn}>
              <ul>
                <li>
                  <Link onClick={handleDownload} className={styles.btnDownload}>
                    <p>DOWNLOAD CV</p>
                    <span><FiDownload /></span>
                  </Link>
                </li>

                <li>
                  <Link to='https://github.com/m0abdelmaqsod?tab=repositories' target='_blank'>
                    <FaGithub />
                  </Link>
                </li>

                <li>
                  <Link to='https://www.linkedin.com/in/mo-abdelmaqsod-51094025a/' target='_blank'>
                    <FaLinkedin />
                  </Link>
                </li>


                <li>
                  <Link to='tel:01220528581' target='_blank'>
                    <FaWhatsapp />
                  </Link>
                </li>
              </ul>
            </div>
          </div>


          <div className={styles.motion}>
            <motion.div
              className={styles.divMotion}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.4, ease: "easeIn" }
              }}
            >
              <div className={styles.divImages}>
                <img src={require('../../components/assets/images/BGPortfolio.png')} alt="" />
                <span></span>

              </div>
              <motion.svg className={styles.svgCircle} fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">


                <motion.circle cx="253" cy="253" r="200"
                  stroke="green"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate: ["120 ,360"]
                  }}
                  transition={{
                    duration: "5",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }} />
              </motion.svg>
            </motion.div>
          </div>
        </div>








        {/* start of About */}
        <div>
          <About />
        </div>





        {/* start of Services */}
        <div>
          <Services />
        </div>



        {/* start of Skills */}
        <div>
          <Skills />
        </div>



        {/* start of Project */}
        <div>
          <Project />
        </div>


        {/* start of Contact me */}
        <div>
          <Contact />
        </div>


      </section >


    </>
  )
}

export default Home