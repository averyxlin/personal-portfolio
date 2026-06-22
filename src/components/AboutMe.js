import React from 'react';
import clsx from 'clsx';
import styles from './AboutMe.module.css';
import profilePicture from '../../static/img/IMG_0052.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function AboutMe() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={`col col--7 ${styles.aboutMe}`}>
            <h1>about me</h1>

            <p>growing up, i was always building elaborate legos or signing up for math contests - <span className={styles.aboutMeEmphasis}>problem solving and making things were the two things i loved most</span>. software engineering let me do both at once, so that's where i landed.</p>

            <p>i started in frontend because i loved the short feedback loop - seeing my work show up immediately in front of users. over the course of 6 internships, i've gone from being the only frontend dev at a 3-engineer startup to working on turbotax at intuit, and that range showed me what i actually care about: <span className={styles.aboutMeEmphasis}>moving fast, talking to users, and building things that solve real problems</span>. i'm high agency by default, and i do my best work alongside fun, smart people who challenge and support each other in equal measure. i'm excited to keep building tools that make users' lives easier - whether that's saving them time, space, or effort along the way :)</p>
          </div>
          <div className={`col col--4 ${styles.profilePictureContainer}`}>
            <img src={profilePicture} alt="profile picture" className={styles.profilePicture} />
          </div>
        </div>
        <div className="row">
          <div className={`col ${styles.contactMe}`}>
            <h3>connect with me</h3>
            <p>i love meeting new people - please never hesitate to reach out, whether it's to work on something exciting together or simply grabbing matcha + going on a walk.</p>
            <div className={styles.lineWrapper}>
              <div>
                <h4><FontAwesomeIcon icon={faEnvelope} /> <span className={styles.hideOnSmallScreens}>email</span></h4>
              </div>
              <div class={styles.middle}></div>
              <div>
                <a href="mailto:averyxlin@gmail.com" target="_blank" rel="noopener noreferrer">averyxlin@gmail.com</a>
              </div>
            </div>
            <div className={styles.lineWrapper}>
              <div>
                <h4><FontAwesomeIcon icon={faLinkedin} /> <span className={styles.hideOnSmallScreens}>linkedin</span></h4>
              </div>
              <div class={styles.middle}></div>
              <div>
                <a href="https://www.linkedin.com/in/averyxlin/" target="_blank" rel="noopener noreferrer">linkedin.com/in/averyxlin</a>
              </div>
            </div>
            <div className={styles.lineWrapper}>
              <div>
                <h4><FontAwesomeIcon icon={faXTwitter} /> <span className={styles.hideOnSmallScreens}>x/twitter</span></h4>
              </div>
              <div class={styles.middle}></div>
              <div>
                <a href="https://x.com/averydotdev" target="_blank" rel="noopener noreferrer">x.com/averydotdev</a>
              </div>
            </div>
            <div className={styles.lineWrapper}>
              <div>
                <h4><FontAwesomeIcon icon={faSquareGithub} /> <span className={styles.hideOnSmallScreens}>github</span></h4>
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
