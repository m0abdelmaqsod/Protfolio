import React from 'react'
import styles from './styles/navbar.module.css'
import { Link } from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';
import { FaWhatsapp, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { IoMailOpenOutline } from "react-icons/io5";




const Navbar = () => {


  return (
    <>
      {/* ======= start of navbar ======== */}
      <section className={styles.Navbar}>
        <div className={styles.divNav}>
          <div className={styles.divLogo}>
            <LinkScroll to="home" spy={true} smooth={true} offset={-100} duration={500}>
              <h1>MoAbdElmaqsod</h1>
            </LinkScroll>
          </div>


          <div className={styles.divLinksMe}>
            <ul>
              <li>
                <Link to="https://github.com/m0abdelmaqsod?tab=repositories" target='_blank'><LuGithub /></Link>
                <span>Github</span>
              </li>
              <li>
                <Link to="https://www.linkedin.com/in/mo-abdelmaqsod-51094025a/" target='_blank'><FaLinkedinIn /></Link>
                <span>LinkedIn</span>
              </li>
              <li>
                <Link to="tel:01220528581" target='_blank'><FaWhatsapp /></Link>
                <span>WhatsApp</span>
              </li>
              <li>
                <Link to="https://t.me/Mo_AbdElamqsod" target='_blank'><FaTelegramPlane /></Link>
                <span>Telegram</span>
              </li>
              <li>
                <Link to="mailto:moabdelmaqsod9@gmail.com" target='_blank'><IoMailOpenOutline /></Link>
                <span>Mail</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar