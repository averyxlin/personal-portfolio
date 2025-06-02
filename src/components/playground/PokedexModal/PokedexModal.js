import React, { useState, useEffect } from 'react';
import styles from './PokedexModal.module.css';
import TypeIcon from '../../TypeIcon';

export default function PokedexModal({ selectedPokemon, loading, error }) {
  const [imageLoading, setImageLoading] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);

  useEffect(() => {
    if (selectedPokemon) {
      setHasSelected(true);
      setImageLoading(true);
      // Preload the image
      const img = new Image();
      img.src = selectedPokemon.sprites.front_default;
      img.onload = () => setImageLoading(false);
    }
  }, [selectedPokemon]);

  if (!hasSelected) {
    return (
      <div className={styles.modalPlaceholder}>
        <p>Click a Pokemon to view details</p>
      </div>
    );
  }

  if (loading || imageLoading) {
    return (
      <div className={styles.modalContent}>
        <div className={styles.pokedexScreen}>
          <div className={`${styles.skeleton} ${styles.skeletonSprite}`} />
        </div>
        <div className={styles.pokedexInfo}>
          <div className={styles.pokedexInfoColumn}>
            <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonTextShort}`} />
            <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonTextShort}`} />
            <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonTextMedium}`} />
            <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonTextLong}`} />
          </div>
          <div className={styles.pokedexInfoColumn}>
            <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonTextLong}`} />
            <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonTextLong}`} />
            <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonTextLong}`} />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.modalPlaceholder}>
        Error: {error}
      </div>
    );
  }

  if (!selectedPokemon) {
    return (
      <div className={styles.modalPlaceholder}>
        Select a Pokemon to view details
      </div>
    );
  }

  const types = selectedPokemon.types || [];
  const height = selectedPokemon.height ? selectedPokemon.height / 10 : 0;
  const weight = selectedPokemon.weight ? selectedPokemon.weight / 10 : 0;

  return (
    <div className={styles.modalContent}>
      <div className={styles.pokedexScreen}>
        <img 
          src={selectedPokemon.sprites?.front_default} 
          alt={selectedPokemon.name}
          className={styles.pokemonSprite}
        />
      </div>
      <div className={styles.pokedexInfo}>
        <div className={styles.pokedexInfoColumn}>
            <p><span>Name:</span> {selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}</p>
            <p><span>Dex Number:</span> #{selectedPokemon.id?.toString().padStart(3, '0')}</p>
            <p>
                <span>Types:</span>{' '}
                {types.map((type, index) => (
                    <TypeIcon key={index} type={type} />
                ))}
            </p>
            <p><span>Abilities:</span> {selectedPokemon.abilities?.map(ability => {
                const abilityName = ability.name.charAt(0).toUpperCase() + ability.name.slice(1).toLowerCase();
                return ability.isHidden ? `${abilityName} (hidden)` : abilityName;
            }).join(', ')}</p>
        </div>
        <div className={styles.pokedexInfoColumn}>
            <p>{selectedPokemon.flavor_text}</p>
            <div className={styles.pokedexInfoRow}>
                <p><span>Height:</span> {height}m</p>
                <p><span>Weight:</span> {weight}kg</p>
            </div>
        </div>
      </div>
    </div>
  );
}
