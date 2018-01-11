import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeFavourite } from '../../actions';
import styles from './FavouritesList.css';

export const FavouritesList = ({ points, remove }) => {
  const favourites = points.filter(point => point.favourite);

  return (
    <div className={styles.listWrapper}>
      <h3>Favourites</h3>
      <ul className={styles.list}>
        {favourites.map(favourite => (
          <li key={favourite.id}>
            <button
              onClick={() => remove(favourite.id)}
              className={styles.remove}
            >
              &times;
            </button>

            <span>{favourite.details.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

FavouritesList.propTypes = {
  points: PropTypes.arrayOf(PropTypes.object),
  remove: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    points: state.points
  };
};

const mapDispatchToProps = dispatch => {
  return {
    remove: id => {
      dispatch(removeFavourite(id));
    }
  };
};

const ConnectedFavouritesList = connect(mapStateToProps, mapDispatchToProps)(
  FavouritesList
);

export default ConnectedFavouritesList;
