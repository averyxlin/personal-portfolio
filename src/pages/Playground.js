import React from 'react'
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './Playground.module.css';
import HalfSuccessCheckbox from '../components/playground/HalfSuccessCheckbox';

export default function Playground() {
  return (
    <Layout
      title={`playground`}
      description="playground">
      <main>
      <section className={styles.features}>
        <div className="container">
            <h1 className={`hero__title ${styles.playgroundTitle}`}>
            playground
            </h1>
        </div>
        <div className="container">
            <div className={styles.playgroundGrid}>
                <HalfSuccessCheckbox />
            </div>
        </div>
      </section>
      </main>
    </Layout>
  )
}
