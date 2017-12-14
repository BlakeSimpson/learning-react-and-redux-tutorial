import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Pointer.css';

class Pointer extends Component {
  render () {
    const { x, y } = this.props;

    return <div className={styles.pointer} style={{ left: x, top: y }} />;
  }
}

Pointer.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default Pointer;
