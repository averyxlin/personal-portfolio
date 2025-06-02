import React from 'react';
import { useHistory } from '@docusaurus/router';
import styles from './Card.module.css';

export default function Card({ title, description, path, children }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/playground/${path}`);
  };

  return (
    <div 
      className={`${styles.card} ${path ? styles.clickable : ''}`}
      {...(path && { onClick: handleClick })}
    >
      <h3 className={styles.cardTitle}>{title}</h3>
      {description && <p className={styles.cardDescription}>{description}</p>}
      {children && (
        <div className={styles.cardContent}>
          {children}
        </div>
      )}
    </div>
  );
} 