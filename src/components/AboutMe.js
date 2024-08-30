import React from 'react';
import clsx from 'clsx';
import styles from './AboutMe.module.css';
import profilePicture from '../../static/img/pfp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export default function AboutMe() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={`col col--7 ${styles.aboutMe}`}>
            <h1>about me</h1>

            <p>i began my software development journey in <span className={styles.aboutMeEmphasis}>frontend web development</span> — i loved seeing the immediate impact of my work on the user experience and how it improved their lives.</p>

            <p>however, my interests shifted after working on api's, specifically for internal tools for fellow developers. after engaging with users + hearing how my efforts enhanced their efficiency, my eyes were opened to the <span className={styles.aboutMeEmphasis}>impact of backend development</span> to end users as well.</p>

            <p>today, i've broadened my experiences, and have built react web applications, to golang rest api's, to python + llm-powered chatbots. i'm excited to continue <span className={styles.aboutMeEmphasis}>building tools that make users' lives easier</span> — whether that's helping them save time, space, or effort in their daily lives :)</p>
          </div>
          <div className={`col col--4 ${styles.profilePictureContainer}`}>
            <img src={profilePicture} alt="profile picture" className={styles.profilePicture} />
          </div>
        </div>
        <div className="row">
          <div className={`col ${styles.contactMe}`}>
            <h3>connect with me</h3>
            <p>i love meeting new people — please never hesitate to reach out, whether it's to work on something exciting together or simply grabbing coffee + going on a walk.</p>
            <div className={styles.lineWrapper}>
              <div>
                <h4><FontAwesomeIcon icon={faEnvelope} /> email</h4>
              </div>
              <div class={styles.middle}></div>
              <div>
                <a href="mailto:xinyan.lin@uwaterloo.ca" target="_blank" rel="noopener noreferrer">xinyan.lin@uwaterloo.ca</a>
              </div>
            </div>
            <div className={styles.lineWrapper}>
              <div>
                <h4><FontAwesomeIcon icon={faLinkedin} /> linkedin</h4>
              </div>
              <div class={styles.middle}></div>
              <div>
                <a href="https://www.linkedin.com/in/averyxlin/" target="_blank" rel="noopener noreferrer">linkedin.com/in/averyxlin</a>
              </div>
            </div>
            <div className={styles.lineWrapper}>
              <div>
                <h4><FontAwesomeIcon icon={faSquareGithub} /> github</h4>
              </div>
              <div class={styles.middle}></div>
              <div>
                <a href="https://github.com/averyxlin" target="_blank" rel="noopener noreferrer">github.com/averyxlin</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
