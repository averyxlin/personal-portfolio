import React from 'react';
import styles from './Experience.module.css';
import IntuitLogo from '../../static/img/intuit.png';
import FlybitsLogo from '../../static/img/flybits.webp';
import LetusLogo from '../../static/img/letus.png';
import TeranetLogo from '../../static/img/teranet.png';
import GoogleLogo from '../../static/img/google.png';
import UWLogo from '../../static/img/uw.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Experience() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className={`hero__title ${styles.experienceTitle}`}>
          where i've been
        </h1>
        {/* intuit */}
        <div className={`row ${styles.resumeItem}`}>
          <a href="https://www.intuit.com" target="_blank" rel="noopener noreferrer">
            <button className={`button ${styles.logoButton} ${styles.intuitLogoButton}`}>
              <img className={`${styles.logoImg}`} src={IntuitLogo} alt="Intuit Logo" />
            </button>
          </a>
          <div className={`${styles.resumeContent}`}>
            <div className={`${styles.lineWrapper}`}>
              <h3 className={styles.resumeTitle}>intuit</h3>
              <div class={styles.middle}></div>
              <div className={styles.date}>may 2024 - present</div>
            </div>
            <p>developer success team. incoming @ turbotax data experience team in september.</p>
          </div>
        </div>
        {/* stealth */}
        <div className={`row ${styles.resumeItem}`}>
          <a href="https://www.linkedin.com/company/stealth-startup-51/" target="_blank" rel="noopener noreferrer">
            <button className={`button ${styles.logoButton} ${styles.stealthLogoButton}`}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </a>
          <div className={`${styles.resumeContent}`}>
            <div className={`${styles.lineWrapper}`}>
              <h3 className={styles.resumeTitle}>stealth startup</h3>
              <div class={styles.middle}></div>
              <div className={styles.date}>sep 2023 - dec 2023</div>
            </div>
            <p>was the only frontend developer in a scrappy team of three - built the landing page + design system, among other cool things :)</p>
          </div>
        </div>
        {/* flybits */}
        <div className={`row ${styles.resumeItem}`}>
          <a href="https://flybits.com/about-us/" target="_blank" rel="noopener noreferrer">
            <button className={`button ${styles.logoButton} ${styles.flybitsLogoButton}`}>
              <img className={`${styles.logoImg}`} src={FlybitsLogo} alt="Flybits Logo" />
            </button>
          </a>
          <div className={`${styles.resumeContent}`}>
            <div className={`${styles.lineWrapper}`}>
              <h3 className={styles.resumeTitle}>flybits</h3>
              <div class={styles.middle}></div>
              <div className={styles.date}>jan 2023 - dec 2023</div>
            </div>
            <p>refactored the design system to be a11y compliant + built a location management platform with google maps</p>
          </div>
        </div>
        {/* letus  */}
        <div className={`row ${styles.resumeItem}`}>
          <a href="https://let.us/about" target="_blank" rel="noopener noreferrer">
            <button className={`button ${styles.logoButton} ${styles.letusLogoButton}`}>
              <img className={`${styles.logoImg}`} src={LetusLogo} alt="Letus Logo" />
            </button>
          </a>
          <div className={`${styles.resumeContent}`}>
            <div className={`${styles.lineWrapper}`}>
              <h3 className={styles.resumeTitle}>letus</h3>
              <div class={styles.middle}></div>
              <div className={styles.date}>may 2022 - aug 2022</div>
            </div>
            <p>integrated i18n into two rent payment + tenant management platforms, based in react + vue respectively</p>
          </div>
        </div>
        {/* teranet */}
        <div className={`row ${styles.resumeItem}`}>
          <a href="https://www.teranet.ca/about-teranet/" target="_blank" rel="noopener noreferrer">
            <button className={`button ${styles.logoButton} ${styles.teranetLogoButton}`}>
              <img className={`${styles.logoImg}`} src={TeranetLogo} alt="Teranet Logo" />
            </button>
          </a>
          <div className={`${styles.resumeContent}`}>
            <div className={`${styles.lineWrapper}`}>
              <h3 className={styles.resumeTitle}>teranet</h3>
              <div class={styles.middle}></div>
              <div className={styles.date}>sept 2021 - dec 2021</div>
            </div>
            <p>tenant + property management platforms</p>
          </div>
        </div>
        {/* google cssi */}
        <div className={`row ${styles.resumeItem}`}>
          <a href="https://www.intuit.com" target="_blank" rel="noopener noreferrer">
            <button className={`button ${styles.logoButton} ${styles.googleLogoButton}`}>
              <img className={`${styles.logoImg}`} src={GoogleLogo} alt="Google Logo" />
            </button>
          </a>
          <div className={`${styles.resumeContent}`}>
            <div className={`${styles.lineWrapper}`}>
              <h3 className={styles.resumeTitle}>google: computer science summer institute</h3>
              <div class={styles.middle}></div>
              <div className={styles.date}>july 2020</div>
            </div>
            <p>learned the fundamentals of html, css, javascript, and web development</p>
          </div>
        </div>
        {/* google cssi */}
        <div className={styles.divider}></div>
        {/* education */}
        <div className={`row ${styles.resumeItem}`}>
          <a href="https://uwaterloo.ca/future-students/programs/computer-science" target="_blank" rel="noopener noreferrer">
            <button className={`button ${styles.logoButton} ${styles.uwLogoButton}`}>
              <img className={`${styles.logoImg}`} src={UWLogo} alt="UW Logo" />
            </button>
          </a>
          <div className={`${styles.resumeContent}`}>
            <div className={`${styles.lineWrapper}`}>
              <h3 className={styles.resumeTitle}>university of waterloo</h3>
              <div class={styles.middle}></div>
              <div className={styles.date}>sep 2020 - expected apr 2025</div>
            </div>
            <p>bcs + human-computer interaction specialization</p>
          </div>
        </div>
      </div>
    </section>
  )
}
