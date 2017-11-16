import React from 'react';
import * as styles from './App.css';
import ConnectedMap from '../Map';
import ConnectedFavouritesList from '../FavouritesList';

const App = () => {
  return (
    <section className={styles.wrapper}>
      <ConnectedMap />
      <ConnectedFavouritesList />
    </section>
  );
};

export default App;
