import React from 'react';
import clsx from 'clsx';
import styles from './Currently.module.css';
import Map from './Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faS } from '@fortawesome/free-solid-svg-icons';

export default function Currently() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={`col ${styles.currently}`}>
            <h1>currently</h1>
            <p>
              finishing up my cs degree @ <a href="https://uwaterloo.ca/future-students/programs/computer-science" target="_blank" rel="noopener noreferrer">uwaterloo</a>, automating data entry into turbotax @ <a href="https://www.intuit.com" target="_blank" rel="noopener noreferrer">intuit</a>, looking for 2025 new grad roles. 
            </p>
            <p>
              outside of shipping code, you can find me lifting heavy circles, playing teamfight tactics, or cafe hopping in toronto.
            </p>
            <div className={styles.currentlyMap}>
              <Map/>
            </div>
            <div className={styles.lineWrapper}>
              <div>
                <h4>location</h4>
              </div>
              <div class={styles.middle}></div>
              <div>
                toronto, ontario, canada
              </div>
            </div>
            <div className={styles.lineWrapper}>
              <div>
                <h4>learning</h4>
              </div>
              <div class={styles.middle}></div>
              <div>
                nail art, unity + game development, crocheting
              </div>
            </div>
            <div className={styles.lineWrapper}>
              <div>
                <h4>excited about</h4>
              </div>
              <div class={styles.middle}></div>
              <div>
                pokemon, developer tools, orangutans
              </div>
            </div>
            <div className={styles.lineWrapper}>
              <div>
                <h4>listening to</h4>
              </div>
              <div class={styles.middle}></div>
              <div>
                <FontAwesomeIcon icon={faSpotify} style={{paddingRight: '8px'}}/><a href="https://open.spotify.com/track/7sVbKoBdhXtYCEOO6qC1SN?si=6fa521384c0a4f8f" target="_blank" rel="noopener noreferrer">we still don't trust you - future, metro boomin, the weeknd</a>
              </div>
            </div>
          </div>
            
        </div>
      </div>
    </section>
  );
}
