import React from 'react';
import Layout from '@theme/Layout';
import styles from './Playground.module.css';
import Card from '../components/playground/Card/Card';
import CardGrid from '../components/playground/CardGrid/CardGrid';
import HalfSuccessCheckbox from '../components/playground/HalfSuccessCheckbox';

export default function Playground() {
  return (
    <Layout
      title="playground"
      description="a collection of my thoughts and experiments">
      <main>
        <section className={styles.features}>
          <div className="container">
            <h1 className={`hero__title ${styles.playgroundTitle}`}>
              playground
            </h1>
          </div>
          <div className="container">
            <CardGrid>
              <Card 
                title="intentionally bad ui" 
                description="inspired by r/badUIbattles"
                path="bad-ui">
              </Card>
              <Card 
                title="pokedex" 
                description="shoutout to bulbapedia and pokeapi"
                path="pokedex">
              </Card>
              {/* Add more cards here as needed */}
            </CardGrid>
          </div>
        </section>
      </main>
    </Layout>
  );
}
