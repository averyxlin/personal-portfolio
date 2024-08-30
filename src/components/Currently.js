import React from 'react';
import clsx from 'clsx';
import styles from './Currently.module.css';
import Map from './Map';

export default function Currently() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={`col ${styles.currently}`}>
            <h1>currently</h1>
            <div className={styles.currentlyMap}>
              <Map/>
            </div>
            
          </div>
            
        </div>
      </div>
    </section>
  );
}
