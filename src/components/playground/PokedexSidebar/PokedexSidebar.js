import React, { useState, useEffect } from 'react';
import styles from './PokedexSidebar.module.css';

const PokedexSidebar = ({ items = [], onItemClick, onLoadMore }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 7; // Number of boxes visible at once

  const handleScrollUp = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
    // Load more if we're near the start
    if (startIndex <= 2) {
      onLoadMore?.();
    }
  };

  const handleScrollDown = () => {
    setStartIndex((prev) => prev + 1);
    // Load more if we're near the end
    if (startIndex + itemsPerPage >= items.length - 2) {
      onLoadMore?.();
    }
  };

  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={styles.sidebar}>
      <button 
        className={styles.navButton}
        onClick={handleScrollUp}
        disabled={startIndex === 0}
        aria-label="Scroll up"
      />
      
      <div className={styles.boxContainer}>
        {visibleItems.map((item, index) => (
          <div
            key={startIndex + index}
            className={styles.box}
            onClick={() => onItemClick?.(startIndex + index)}
          >
            <span className={styles.pokemonName}>{item}</span>
          </div>
        ))}
      </div>

      <button 
        className={styles.navButton}
        onClick={handleScrollDown}
        disabled={startIndex + itemsPerPage >= items.length}
        aria-label="Scroll down"
      />
    </div>
  );
};

export default PokedexSidebar; 