import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './playground.pages.module.css';
import BackButton from '../../components/playground/BackButton/BackButton';
import PokedexSidebar from '../../components/playground/PokedexSidebar/PokedexSidebar';
import PokedexModal from '../../components/playground/PokedexModal/PokedexModal';
import usePokemon from '../../hooks/usePokemon';

export default function Pokedex() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const { pokemonList, loading, error, hasMore, loadMore } = usePokemon();

  // Load more Pokemon when reaching the end of the list
  useEffect(() => {
    if (selectedPokemon && pokemonList.length > 0) {
      const lastPokemon = pokemonList[pokemonList.length - 1];
      if (selectedPokemon.id === lastPokemon.id && hasMore) {
        loadMore();
      }
    }
  }, [selectedPokemon, pokemonList, hasMore, loadMore]);

  // Preload next Pokemon's image
  useEffect(() => {
    if (selectedPokemon && pokemonList.length > 0) {
      const currentIndex = pokemonList.findIndex(p => p.id === selectedPokemon.id);
      if (currentIndex < pokemonList.length - 1) {
        const nextPokemon = pokemonList[currentIndex + 1];
        const img = new Image();
        img.src = nextPokemon.sprites.front_default;
      }
    }
  }, [selectedPokemon, pokemonList]);

  const handlePokemonSelect = async (index) => {
    setIsSelecting(true);
    setSelectedPokemon(null); // Clear current Pokemon while loading
    try {
      const pokemon = pokemonList[index];
      // Preload the image before setting the Pokemon
      const img = new Image();
      img.src = pokemon.sprites.front_default;
      await new Promise((resolve) => {
        img.onload = resolve;
      });
      setSelectedPokemon(pokemon);
    } finally {
      setIsSelecting(false);
    }
  };

  return (
    <Layout
      title="pokedex"
      description="A simple pokedex built with React">
      <main>
        <section className={styles.features}>
          <div className="container">
            <BackButton />
            <h1 className={`hero__title ${styles.playgroundTitle}`}>
              pokedex
            </h1>
          </div>
          <div className="container">
            <div className={styles.playgroundContent}>
              <div className={styles.pokedexLayout}>
                <PokedexSidebar 
                  items={pokemonList.map(pokemon => pokemon.name)}
                  onItemClick={handlePokemonSelect}
                  onLoadMore={loadMore}
                />
                <div className={styles.modal}>
                  <PokedexModal 
                    selectedPokemon={selectedPokemon}
                    loading={loading || isSelecting}
                    error={error}
                  />
                </div>
              </div>
            </div>
            <div className={styles.pokedexFooter}>
                <p>
                    <span>
                        <b>to-do:</b> fuzzy search, infinite scroll, more than gen 1 pokemon lol
                    </span>
                </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
