import React from 'react';
import { useHistory } from '@docusaurus/router';
import styles from './BackButton.module.css';

const BackButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <button className={styles.backButton} onClick={handleClick}>
      ← back
    </button>
  );
};

export default BackButton; 