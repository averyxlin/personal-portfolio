import React from 'react';
import clsx from 'clsx';
import styles from './AboutMe.module.css';
import profilePicture from '../../static/img/pfp.png'

export default function AboutMe() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={`col col--8 ${styles.aboutMe}`}>
            <h1>about me</h1>

            <p>i began my software development journey in <span className={styles.aboutMeEmphasis}>frontend web development</span> — i loved seeing the immediate impact of my work on the user experience and how it improved their lives.</p>

            <p>however, my interests shifted after working on api's, specifically for internal tools for fellow developers. after engaging with users + hearing how my efforts enhanced their efficiency, my eyes were opened to the <span className={styles.aboutMeEmphasis}>impact of backend development</span> to end users as well.</p>

            <p>today, i broadened my experiences, and have worked with everything from react web applications, to golang rest api's, to python + llm-powered chatbots. i'm excited to continue <span className={styles.aboutMeEmphasis}>building tools that make users' lives easier</span> — whether that's helping them save time, space, or effort in their daily lives :)</p>
          </div>
          <div className={`col col--4 ${styles.profilePictureContainer}`}>
            <img src={profilePicture} alt="profile picture" className={styles.profilePicture} />
          </div>
        </div>
      </div>
    </section>
  );
}
