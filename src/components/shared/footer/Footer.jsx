import React from 'react';
import styles from './styles/footer.module.css';
import { RiCopyrightLine } from "react-icons/ri";






const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.divFooter}>
          <p>2024 © All rights reserved to</p>
          <span>MoAbdElmaqsod</span>
        </div>
      </section>
    </>
  )
}

export default Footer;