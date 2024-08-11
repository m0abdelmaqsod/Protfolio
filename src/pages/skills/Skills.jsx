import React from 'react';
import styles from './styles/skills.module.css';

// ========== icons ========== //
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { AiOutlineJavaScript } from "react-icons/ai";
import { IoLogoReact, IoLogoSass, IoLogoVercel, IoTerminal } from "react-icons/io5";
import { RiNextjsFill, RiBootstrapLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { CgNpm } from "react-icons/cg";
import { VscVscode } from "react-icons/vsc";
import { SiPostman, SiReactrouter } from "react-icons/si";
import { FaGithub, FaFigma, FaGitAlt } from "react-icons/fa";


const Skills = () => {
  return (
    <>
      <section id='skills' className={styles.skills}>
        <div className={styles.titleSkills}>
          <h3>Skills</h3>
          <p>My Technical Level</p>
        </div>


        <div className={styles.allSkills}>

          <div className={styles.divSkillsFront}>
            <div className={styles.titleFront}>
              <h3>Frontend</h3>
            </div>


            <div className={styles.allSkillsFront}>
              <div>
                <span><TiHtml5 /></span>
                <p>Html</p>
              </div>


              <div>
                <span><TiCss3 /></span>
                <p>Css</p>
              </div>

              <div>
                <span><AiOutlineJavaScript /></span>
                <p>JavaScript</p>
              </div>

              <div>
                <span>ES</span>
                <p>EcmaScript</p>
              </div>

              <div>
                <span><IoLogoReact /></span>
                <p>React.js</p>
              </div>


              <div>
                <span><SiReactrouter /></span>
                <p>React Router</p>
              </div>

              <div>
                <span><RiNextjsFill /></span>
                <p>Next.js</p>
              </div>

              <div>
                <span><TbBrandRedux /></span>
                <p>Redux</p>
              </div>

              <div>
                <span><RiBootstrapLine /></span>
                <p>Bootstrap</p>
              </div>

              <div>
                <span><IoLogoSass /></span>
                <p>Sass</p>
              </div>
            </div>
          </div>








          <div className={styles.divSkillsFront}>
            <div className={styles.titleFront}>
              <h3>Tools</h3>
            </div>


            <div className={styles.allSkillsFront}>
              <div>
                <span><FaGitAlt /></span>
                <p>Git</p>
              </div>


              <div>
                <span><FaGithub /></span>
                <p>Github</p>
              </div>

              <div>
                <span><IoTerminal /></span>
                <p>Terminal</p>
              </div>

              <div>
                <span><CgNpm /></span>
                <p>NPM</p>
              </div>

              <div>
                <span><VscVscode /></span>
                <p>Vs Code</p>
              </div>

              <div>
                <span><FaFigma /></span>
                <p>Figma</p>
              </div>

              <div>
                <span><SiPostman /></span>
                <p>Postman</p>
              </div>

              <div>
                <span><IoLogoVercel /></span>
                <p>Vercel</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills