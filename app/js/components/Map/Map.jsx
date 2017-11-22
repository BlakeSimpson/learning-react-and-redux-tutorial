import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Pointer from '../Pointer';

import styles from './Map.css';

const Map = ({ points }) => {
  return (
    <div className={styles.map}>
      {points.map((point, index) => <Pointer {...point} key={index} />)}
    </div>
  );
};

Map.propTypes = {
  points: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => {
  return {
    points: state.points
  };
};

const ConnectedMap = connect(mapStateToProps)(Map);

export default ConnectedMap;
