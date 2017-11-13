import React from 'react';

import Pointer from '../Pointer';

import styles from './Map.css';

const points = [
  {
    x: 450,
    y: 110,
    details: {
      name: 'The Wall',
      house: "Night's Watch",
      words: 'Night gathers, and now my watch begins.'
    }
  },
  {
    x: 375,
    y: 355,
    details: {
      name: 'Winterfell',
      house: 'Stark',
      words: 'Winter is Coming'
    }
  },
  {
    x: 345,
    y: 705,
    details: {
      name: 'The Twins',
      house: 'Frey',
      words: 'We Stand Together'
    }
  },
  {
    x: 155,
    y: 775,
    details: {
      name: 'The Iron Islands',
      house: 'Greyjoy',
      words: 'We Do Not Sow'
    }
  },
  {
    x: 150,
    y: 945,
    details: {
      name: 'Casterly Rock',
      house: 'Lannister',
      words: 'Hear me Roar!'
    }
  },
  {
    x: 545,
    y: 1000,
    details: {
      name: "King's Landing",
      house: 'Baratheon',
      words: 'Ours is the Fury'
    }
  },
  {
    x: 250,
    y: 1190,
    details: {
      name: 'Highgarden',
      house: 'Tyrell',
      words: 'Growing Strong'
    }
  }
];

const Map = () => {
  return (
    <div className={styles.map}>
      {points.map((point, index) => <Pointer {...point} key={index} />)}
    </div>
  );
};

export default Map;
