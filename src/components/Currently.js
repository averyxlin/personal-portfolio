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
              based in san francisco as the second engineering hire at <a href="https://castinsights.com" target="_blank" rel="noopener noreferrer">cast insights</a>. i've tinkered with everything from frontend features, to low-latency search over 10M+ hours of transcribed content used by top hedge funds, to a kubernetes audio ingestion pipeline that processes 10k+ hours of audio per hour. 
            </p>
            <p>
              outside of work, you can find me collecting smiski figurines, trying cafes and restaurants around the city, or playing teamfight tactics.
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
                san francisco, california, usa
              </div>
            </div>
            <div className={styles.lineWrapper}>
              <div>
                <h4>learning</h4>
              </div>
              <div class={styles.middle}></div>
              <div>
                muay thai, threejs + webgl
              </div>
            </div>
            <div className={styles.lineWrapper}>
              <div>
                <h4>excited about</h4>
              </div>
              <div class={styles.middle}></div>
              <div>
                pokemon, matcha, kubernetes
              </div>
            </div>
            <div className={styles.lineWrapper}>
              <div>
                <h4>listening to</h4>
              </div>
              <div class={styles.middle}></div>
              <div>
                <FontAwesomeIcon icon={faSpotify} style={{paddingRight: '8px'}}/><a href="https://open.spotify.com/track/5oiL72bW9rAeMcgkrQzqQP?si=896d0a71b0d14355" target="_blank" rel="noopener noreferrer">sogni ancora - pierro piccioni</a>
              </div>
            </div>
          </div>
            
        </div>
      </div>
    </section>
  );
}
