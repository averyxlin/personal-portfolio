import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/AboutMe';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title heroBanner-title">
          hi, i'm <span className={styles.nameTitle}>avery lin</span>.
        </h1>
        <p className={`hero__subtitle ${styles.subtitle}`}>full-stack developer software developer + computer science student @ uwaterloo</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`home`}
      description="This is a description">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
