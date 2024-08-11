import React, { useState } from 'react';
import styles from './styles/sidebar.module.css';

import { FaHome, FaHandHolding } from "react-icons/fa";

// ==== icons services ==== //
import { MdMiscellaneousServices } from "react-icons/md";

import { CiGrid42, CiMail } from "react-icons/ci";

import { FaUser } from "react-icons/fa6";
// import { FaRegAddressCard } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { Link } from 'react-scroll';








const Sidebar = () => {
    const [isActive, setIsActive] = useState("home");

    const handleSetActive = (to) => {
        setIsActive(to)
    };


    return (
        <>
            {/* ======= start of navbar ======== */}
            <section className={styles.sidebar}>
                <div className={styles.divSide}>
                    <ul>
                        <li>
                            <Link to="home" spy={true} smooth={true} offset={-50} duration={500} onSetActive={handleSetActive} className={isActive === "home" ? styles.activeSide : ""} >
                                <span><FaHome /></span>
                                <p>Home</p>
                                <div className={styles.bgIconSidebar}></div>

                            </Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive} className={isActive === "about" ? styles.activeSide : ""} >
                                <span><FaUser /></span>
                                <p>About</p>
                                <div className={styles.bgIconSidebar}></div>

                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive} className={isActive === "services" ? styles.activeSide : ""} >
                                <span><FaHandHolding /></span>
                                <span><MdMiscellaneousServices /></span>
                                <p>Services</p>
                                <div className={styles.bgIconSidebar}></div>

                            </Link>
                        </li>
                        <li>
                            <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive} className={isActive === "skills" ? styles.activeSide : ""} >
                                <span><GiSkills /></span>
                                <p>Skills</p>
                                <div className={styles.bgIconSidebar}></div>

                            </Link>
                        </li>
                        <li>
                            <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive} className={isActive === "projects" ? styles.activeSide : ""} >
                                <span><CiGrid42 /></span>
                                <p>Projects</p>
                                <div className={styles.bgIconSidebar}></div>

                            </Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive} className={isActive === "contact" ? styles.activeSide : ""} >
                                <span><CiMail /></span>
                                <p>Contact</p>
                                <div className={styles.bgIconSidebar}></div>

                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Sidebar