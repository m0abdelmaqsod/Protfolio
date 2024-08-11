import React, { useState, useRef } from 'react'
import styles from './styles/contact.module.css';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import { IoArrowRedoSharp } from "react-icons/io5";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { TiLocationArrow } from "react-icons/ti";
import { BsEnvelopeCheck, BsEnvelopeX } from "react-icons/bs";
import axios from 'axios';





const Contact = () => {


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [massage, setMassage] = useState("")
  const [success, setSuccess] = useState(null)



  const form = useRef();

  // console.log(form);

  const sendEmail = (e) => {
    e.preventDefault();
    // let userData = { name, email, massage }
    const ServiceId = 'service_59nq9bd';
    const TemplateId = 'template_e8nev5b';
    const PublicKey = 'J1xPeGAr3iEcVxzHk';

    emailjs
      .sendForm(ServiceId, TemplateId, form.current, {
        publicKey: PublicKey,
      })
      .then(
        (res) => {
          console.log(res);
          console.log('SUCCESS!');
          setSuccess(true);
          setName("")
          setEmail("")
          setMassage("")
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccess(false);
        },
      );
  };







  return (
    <>
      <section id='contact' className={styles.contact}>

        <div className={styles.titleContact}>
          <h3>Contact Me</h3>
          <p>Get in touch</p>
        </div>



        <div className={styles.allContact}>
          <div className={styles.divSocialCont}>

            <div className={styles.titleSocial}>
              <h3>Talk to me</h3>
            </div>



            <div className={styles.divSocial}>
              <span><CiMail /></span>
              <h3>Email</h3>
              <p>moabdelmaqsod9@gmail.com</p>
              <Link to="mailto:moabdelmaqsod9@gmail.com">
                <p>Write Me</p>
                <span><IoArrowRedoSharp /></span>
              </Link>
            </div>


            <div className={styles.divSocial}>
              <span><FaWhatsapp /></span>
              <h3>WhatsApp</h3>
              <p>(+20) 1220528581</p>
              <Link to="tel:01220528581">
                <p>Write Me</p>
                <span><IoArrowRedoSharp /></span>
              </Link>
            </div>


            <div className={styles.divSocial}>
              <span><FaTelegramPlane /></span>
              <h3>Telegram</h3>
              <p>@Mo_AbdElamqsod</p>
              <Link to="">
                <p>Write Me</p>
                <span><IoArrowRedoSharp /></span>
              </Link>
            </div>


          </div>





          <div className={styles.divFormCont}>
            <div className={styles.titleCont}>
              <h3>Let's connect</h3>
            </div>


            <div className={styles.divForm}>
              <form action="" ref={form} onSubmit={sendEmail}>
                <div>
                  <input type="text" name="name" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
                  <span>Name</span>
                </div>
                <div>
                  <input required type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <span>Email</span>
                </div>
                <div>
                  <textarea name="message" id="message" required value={massage} onChange={(e) => setMassage(e.target.value)}></textarea>
                  <span>Massage</span>
                </div>
                <button>
                  <p>Send Me</p>
                  <span><TiLocationArrow /></span>
                </button>
              </form>


              {
                success === true ?
                  <div className={styles.mass_success}>
                    <span><BsEnvelopeCheck /></span>
                    <p>SUCCESS! Your email has been sent.</p>
                  </div>
                  : success === false ?
                    <div className={styles.mass_failed}>
                      <span><BsEnvelopeX /></span>
                      <p>FAILED! Your email was not sent.</p>
                    </div> : ""
              }



            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Contact