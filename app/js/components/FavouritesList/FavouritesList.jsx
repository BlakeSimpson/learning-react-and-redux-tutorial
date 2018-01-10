import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './FavouritesList.css';

export const FavouritesList = ({ points }) => {
  const favourites = points.filter(point => point.favourite);

  return (
    <div className={styles.listWrapper}>
      <h3>Favourites</h3>
      <ul className={styles.list}>
        {favourites.map((favourite, index) => (
          <li key={index}>{favourite.details.name}</li>
        ))}
      </ul>
    </div>
  );
};

FavouritesList.propTypes = {
  points: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => {
  return {
    points: state.points
  };
};

const ConnectedFavouritesList = connect(mapStateToProps)(FavouritesList);

export default ConnectedFavouritesList;
