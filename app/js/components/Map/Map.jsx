import React from 'react';

import westeros from '../../../img/westeros.jpg';
import styles from './Map.css';

const points = [
  {
    x: 430,
    y: 55,
    details: {
      name: 'The Wall',
      house: "Night's Watch",
      description: 'Night gathers, and now my watch begins.'
    }
  },
  {
    x: 355,
    y: 300,
    details: {
      name: 'Winterfell',
      house: 'Stark',
      words: 'Winter is Coming'
    }
  },
  {
    x: 325,
    y: 650,
    details: {
      name: 'The Twins',
      house: 'Frey',
      words: 'We Stand Together'
    }
  },
  {
    x: 135,
    y: 720,
    details: {
      name: 'The Iron Islands',
      house: 'Greyjoy',
      words: 'We Do Not Sow'
    }
  },
  {
    x: 150,
    y: 880,
    details: {
      name: 'Casterly Rock',
      house: 'Lannister',
      words: 'Hear me Roar!'
    }
  },
  {
    x: 525,
    y: 945,
    details: {
      name: "King's Landing",
      house: 'Baratheon',
      words: 'Ours is the Fury'
    }
  },
  {
    x: 237,
    y: 1145,
    details: {
      name: 'Highgarden',
      house: 'Tyrell',
      words: 'Growing Strong'
    }
  },
  {
    x: 615,
    y: 1335,
    details: {
      name: 'Sunspear',
      house: 'Martell',
      words: 'Unbowed, Unbent, Unbroken'
    }
  }
];

const Map = () => {
  return (
    <div className={styles.map}>
      <img src={westeros} />
    </div>
  );
};

export default Map;
