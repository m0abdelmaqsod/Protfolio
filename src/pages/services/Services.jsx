import React from 'react'
import styles from './styles/services.module.css';








const Services = () => {
  return (
    <>
      <section id='services' className={styles.services}>
        <div className={styles.titleServices}>
          <h3>Services</h3>
          <p>What I offer</p>
        </div>



        <div className={styles.allServices}>
          <div className={styles.divServe}>
            <div className={styles.titleInfoServe}>
              <h3>Frontend Development</h3>
            </div>
            <p>We provide modern and attractive user interface design and development services using advanced technologies. We combine creativity and technology to provide a distinctive and smooth user experience.</p>
          </div>

          <div className={styles.divServe}>
            <div className={styles.titleInfoServe}>
              <h3>React.js | Next.js Development</h3>
            </div>
            <p>Create engaging and responsive user interfaces with the power of React.js and Next.js. I specialize in building interactive and dynamic frontends that provide a modern and intuitive user experience.</p>
          </div>



            <div className={styles.divServe}>
              <div className={styles.titleInfoServe}>
                <h3>Responsive and compatible with devices</h3>
              </div>
              <p>We ensure that the user interfaces we build are fully responsive and compatible with different devices and screens.</p>
            </div>

            <div className={styles.divServe}>
              <div className={styles.titleInfoServe}>
                <h3>Design and Professional Development</h3>
              </div>
              <p>We design and develop beautiful user interfaces that suit your business needs using the latest design and development technologies.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services