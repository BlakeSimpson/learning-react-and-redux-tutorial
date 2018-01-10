import React from 'react';

import ConnectedMap from '../Map';
import ConnectedFavouritesList from '../FavouritesList';

// eslint-disable-next-line no-unused-vars
import styles from './App.css';

const App = () => {
  return (
    <section>
      <ConnectedMap />
      <ConnectedFavouritesList />
    </section>
  );
};

export default App;
