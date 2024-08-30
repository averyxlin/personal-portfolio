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
            <p>
              finishing up my cs degree @ <a href="https://uwaterloo.ca/future-students/programs/computer-science">uwaterloo</a>, building llm-powered developer assistants + developer tools @ <a href="https://www.intuit.com">intuit</a>, looking for 2025 new grad roles.
            </p>
            <p>
              when i'm not tinkering with slack bolts, you can find me lifting heavy circles, donkey rolling in <a href="https://lolchess.gg/profile/na/stargirl-die4u/">teamfight tactics</a>, or exploring toronto while the warm weather lasts.
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
                tattooing, unity + game development, crocheting
              </div>
            </div>
            <div className={styles.lineWrapper}>
              <div>
                <h4>excited about</h4>
              </div>
              <div class={styles.middle}></div>
              <div>
                bullet journaling, developer tools, cats + weiner dogs
              </div>
            </div>
          </div>
            
        </div>
      </div>
    </section>
  );
}
