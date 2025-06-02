import React from 'react';
import Layout from '@theme/Layout';
import HalfSuccessCheckbox from '../../components/playground/HalfSuccessCheckbox';
import styles from './bad-ui.module.css';
import CardGrid from '../../components/playground/CardGrid/CardGrid';
import Card from '../../components/playground/Card/Card';
import BackButton from '../../components/playground/BackButton/BackButton';

export default function BadUI() {
  return (
    <Layout
      title="intentionally bad ui"
      description="inspired by r/badUIbattles">
      <main>
        <section className={styles.features}>
          <div className="container">
            <BackButton />
            <h1 className={`hero__title ${styles.playgroundTitle}`}>
              intentionally bad ui
            </h1>
          </div>
          <div className="container">
            <div className={styles.playgroundContent}>
              <CardGrid>
                <Card>
                  <HalfSuccessCheckbox />
                </Card>
              </CardGrid>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 