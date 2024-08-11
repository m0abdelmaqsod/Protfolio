import React, { useState } from 'react';
import styles from './styles/projects.module.css';
import { Link } from 'react-router-dom';
import { SiScrollreveal } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link as LinkScroll } from 'react-scroll';


import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";


import proj1 from "../../components/assets/images/eCommerce-smart-shop.png";
import proj2 from "../../components/assets/images/instagram.png";
import proj3 from "../../components/assets/images/FAVORIT PAGES FEED.png";
import proj4 from "../../components/assets/images/E-Commerce tasty treat.png";
import proj5 from "../../components/assets/images/Build a NEXT.JS User Dashboard.png";
import proj6 from "../../components/assets/images/Portfolio me.png";
import proj7 from "../../components/assets/images/Analog Clock.png";
import proj8 from "../../components/assets/images/all-games-here.png";
import proj9 from "../../components/assets/images/Klassy Cafe.png";
import proj10 from "../../components/assets/images/shades.png";
// import proj11 from "../../components/assets/images/";




const project = [
  {
    id: 1,
    nameProject: "E-Commerce-smart-shop",
    imgProject: proj1,
    language: "react",
    github: "https://github.com/m0abdelmaqsod/eCommerce-smart-shop",
    live: "",
  },
  {
    id: 2,
    nameProject: "Instagram",
    imgProject: proj2,
    language: "react",
    github: "https://github.com/m0abdelmaqsod/instagram",
    live: "",
  },
  {
    id: 3,
    nameProject: "FAVORIT PAGES FEED ",
    imgProject: proj3,
    language: "next",
    github: "https://github.com/m0abdelmaqsod/FAV-PAGES-FEED",
    live: "https://fav-pages-feed.vercel.app/",
  },
  {
    id: 4,
    nameProject: "E-Commerce tasty treat",
    imgProject: proj4,
    language: "react",
    github: "https://github.com/m0abdelmaqsod/eCommerce_tasty_treat",
    live: "",
  },
  {
    id: 5,
    nameProject: "Build User Dashboard",
    imgProject: proj5,
    language: "next",
    github: "https://github.com/m0abdelmaqsod/Build-a-NEXT.JS-User-Dashboard",
    live: "https://build-a-next-js-user-dashboard.vercel.app/",
  },
  {
    id: 6,
    nameProject: "Portfolio me",
    imgProject: proj6,
    language: "React",
    github: "",
    live: "",
  },
  {
    id: 7,
    nameProject: "Digital And Analog Clock",
    imgProject: proj7,
    language: "javascript",
    github: "https://github.com/m0abdelmaqsod/Digital-Clock-And-Analog-Clock-",
    live: "https://m0abdelmaqsod.github.io/Digital-Clock-And-Analog-Clock-/",
  },
  {
    id: 8,
    nameProject: "all games here",
    imgProject: proj8,
    language: "javascript",
    github: "https://github.com/m0abdelmaqsod/all-games-here",
    live: "https://m0abdelmaqsod.github.io/all-games-here/#",
  },
  {
    id: 9,
    nameProject: "Klassy Cafe",
    imgProject: proj9,
    language: "javascript",
    github: "https://github.com/m0abdelmaqsod/KlassyCafe/tree/main",
    live: "https://m0abdelmaqsod.github.io/KlassyCafe/#contact_us",
  },
  {
    id: 10,
    nameProject: "shades",
    imgProject: proj10,
    language: "html,css",
    github: "https://github.com/m0abdelmaqsod/shades",
    live: "https://m0abdelmaqsod.github.io/shades/",
  },
  {
    id: 11,
    nameProject: "bouncingBall",
    imgProject: "proj11",
    language: "javascript",
    github: "https://github.com/m0abdelmaqsod/bouncingBall",
    live: "",
  },
]










const Project = () => {

  const [language, setLanguage] = useState('all');

  const filProjects = language === "all" ? project : project.filter(proj => proj.language === language)

  // console.log(filProjects);



  // === pagination === //
  const [currentPage, setCurrentPage] = useState(1);

  const PRODUCT_PER_PAGE = 9;
  const pages = Math.ceil(filProjects.length / PRODUCT_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
  const finishIndex = currentPage * PRODUCT_PER_PAGE;
  const orderedProducts = filProjects.slice(startIndex, finishIndex);


  // console.log(orderedProducts);

  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }




  return (
    <>
      <section id='projects' className={styles.project}>
        <div className={styles.titleProjects}>
          <h3>Projects</h3>
          <p>My recent work</p>
        </div>


        <div className={styles.navProject}>
          <ul>
            <li>
              <Link className={language === "all" ? styles.activeNavProj : ""} onClick={() => setLanguage("all")}>
                <p>All</p>
                <span><SiScrollreveal /></span>
                <div className={styles.bgIcon}></div>
              </Link>
            </li>
            <li>
              <Link className={language === "react" ? styles.activeNavProj : ""} onClick={() => setLanguage("react")}>
                <p>React.js</p>
                <span><IoLogoReact /></span>
                <div className={styles.bgIcon}></div>
              </Link>
            </li>
            <li>
              <Link className={language === "next" ? styles.activeNavProj : ""} onClick={() => setLanguage("next")}>
                <p>Next.js</p>
                <span><RiNextjsLine /></span>
                <div className={styles.bgIcon}></div>
              </Link>
            </li>
            <li>
              <Link className={language === "javascript" ? styles.activeNavProj : ""} onClick={() => setLanguage("javascript")}>
                <p>JavaScript</p>
                <span><AiOutlineJavaScript /></span>
                <div className={styles.bgIcon}></div>
              </Link>
            </li>
          </ul>
        </div >







        <div className={styles.allProject}>
          {
            orderedProducts.map((item, index) => (
              <div key={index} className={styles.divAllProject}>
                <div className={styles.divTitle}>
                  <h3>{item.nameProject}</h3>
                </div>

                <div className={styles.divImg}>
                  <img src={item.imgProject} alt="" />
                </div>


                <div className={styles.divLinks}>
                  <Link to={item.live}>
                    <span><TbWorldWww /></span>
                    <p>Live</p>
                  </Link>

                  <Link to={item.github}>
                    <span><FaGithub /></span>
                    <p>Github</p>
                  </Link>

                </div>
              </div>
            ))
          }
        </div>



        {/* === start of pagination === */}
        {
          filProjects.length >= 9 ? <div className={styles.pagination}>

            <div className={styles.btn_prev}>
              <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
                <FiArrowLeft />
              </button>
            </div>

            {generatedPages.map((page) => (
              <div key={page} >
                <LinkScroll to='projects' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setCurrentPage(page)} className={currentPage === page ? styles.active : styles.btn_num}>
                  {page}
                </LinkScroll>
              </div>
            ))}

            <div className={styles.btn_next}>
              <button disabled={currentPage === pages} onClick={() => setCurrentPage((prev) => prev + 1)}>
                <FiArrowRight />
              </button>
            </div>

          </div> : ""
        }

      </section >
    </>
  )
}

export default Project