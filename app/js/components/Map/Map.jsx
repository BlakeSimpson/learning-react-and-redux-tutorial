import React from 'react';

import westeros from '../../../img/westeros.jpg';
import styles from './Map.css';

const Map = () => {
  return (
    <div className={styles.map}>
      <img src={westeros} />
    </div>
  );
};

export default Map;
