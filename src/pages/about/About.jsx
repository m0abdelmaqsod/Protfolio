import React from 'react';
import styles from './styles/about.module.css';
import CountUp from 'react-countup';

import { TiHtml5, TiCss3 } from "react-icons/ti";
import { AiOutlineJavaScript } from "react-icons/ai";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill, RiCustomerService2Fill } from "react-icons/ri";
import { BsPatchCheck } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";








const stats = [
    {
        id: 1,
        num: 1,
        icon: <BsPatchCheck />,
        text: "Experience",
        disc: "Years"
    },
    {
        id: 2,
        num: 11,
        icon: <FaBriefcase />,
        text: "Completed",
        disc: "Projects"
    },
    {
        id: 3,
        num: 10,
        icon: <GiSkills />,
        text: "Technologies",
        disc: "Skills"
    },
    {
        id: 4,
        num: 24,
        icon: <RiCustomerService2Fill />,
        text: "Support",
        disc: "Online"
    }
];








const About = () => {




    return (
        <>
            <section id='about' className={styles.about}>
                <div className={styles.divTitle}>
                    <h3>About Me</h3>
                    <p>My Introduction</p>
                </div>


                {/* إحصائيات */}
                {/* start of stats */}
                <div className={styles.stats}>

                    {
                        stats.map((item, index) => (
                            <div className={styles.divStats} key={index}>
                                <p className={styles.icon}>{item.icon}</p>
                                <p>{item.text}</p>
                                <h3>
                                    <CountUp end={item.num} duration={8} delay={0.5} className={styles.countUp}/>
                                </h3>
                                <span>{item.disc}</span>
                            </div>
                        ))
                    }
                </div>



                <div className={styles.divAboutMe}>

                    <div>
                        <div className={styles.divInfoMe}>
                            <h6>Welcome I'm</h6>
                            <h3> Mohamed Mahmod AbdElmaqsod </h3>
                            <p> Front end Developer</p>
                        </div>
                    </div>

                    <p className={styles.infoAbutMe}>
                        I have a great passion for developing and improving user experience on the web. I have a passion for developing and implementing attractive and interactable user interfaces using modern web technologies. Skillfully use basic web languages ​​such as
                        <span> HTML <span className={styles.iconHtml}><TiHtml5 /></span></span>,
                        <span> CSS <span className={styles.iconCss}><TiCss3 /></span></span> and
                        <span> JavaScript <span className={styles.iconJs}><AiOutlineJavaScript /></span> </span>
                        to build and format elements and pages and achieve engaging interactions. I am familiar with popular frameworks like
                        <span> React.js <span className={styles.iconReact}><IoLogoReact /></span></span> and
                        <span> Next.js <RiNextjsFill /></span>
                        , use them to develop dynamic and scalable user interfaces. I am a constant learner and stay up to date with the latest technologies and trends in front-end development. I am creative and passionate about solving technical challenges and providing an excellent user experience through front-end technologies.
                    </p>

                </div>



                {/* ====== المؤهل ===== */}
                {/* ====== Qualification ===== */}
                <div className={styles.qualification}>
                    <div className={styles.divTitleQualifed}>
                        <h3>Qualification</h3>
                        <p>My Personal Journey</p>
                    </div>

                    <div className={styles.education}>
                        <div className={styles.titleEducation}>
                            <h3>Education</h3>
                        </div>

                        <div className={styles.divEducation}>
                            <div className={styles.divAllEducation}>
                                <p>1</p>
                                <div className={styles.divInfoEducation}>
                                    <h3>Bachelor of Management Information Systems</h3>
                                    <p>Delta higher institute for computers in mansoura</p>
                                </div>
                            </div>

                            <span></span>

                            <div className={styles.divAllEducation}>
                                <p>2</p>
                                <div className={styles.divInfoEducation}>
                                    <h3>Frontend Developer | React.js | Next.js </h3>
                                    <p>Academy smart code</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>




            </section>
        </>
    )
}

export default About