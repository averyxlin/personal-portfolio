import React from 'react';
import styles from './Experience.module.css';
import IntuitLogo from '../../static/img/IntuitLogo.png'

export default function Experience() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className={`hero__title ${styles.experienceTitle}`}>
          where i've been
        </h1>
        <div className={`row ${styles.resumeItem}`}>
          <a href="https://www.intuit.com" target="_blank" rel="noopener noreferrer">
            <button className={`button ${styles.logoButton} ${styles.intuitLogoButton}`}>
              <img className={`${styles.logoImg}`} src={IntuitLogo} alt="Intuit Logo" />
            </button>
          </a>
          <div className={`${styles.resumeContent}`}>
            <div className={`${styles.lineWrapper}`}>
              <h3 className={styles.resumeTitle}>Intuit</h3>
              <div class={styles.middle}></div>
              <div>sept 2024 - present</div>
            </div>
            <p>developer success team. incoming @ turbotax data experience team</p>
          </div>
        </div>
      </div>
    </section>
  )
}
