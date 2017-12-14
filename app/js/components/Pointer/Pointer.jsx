import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Pointer.css';

class Pointer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      open: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle (event) {
    event.preventDefault();

    if (event.target === event.currentTarget) {
      this.setState({ open: !this.state.open });
    }
  }

  render () {
    const { x, y, details } = this.props;
    const { name, house, words } = details;
    const detailsClasses = classNames(styles.details, {
      [styles.hidden]: !this.state.open
    });

    return (
      <div
        className={styles.pointer}
        style={{ left: x, top: y }}
        onClick={this.toggle}
      >
        <div className={detailsClasses}>
          <header className={styles.headline}>
            <h3>{name}</h3>
            <a href="#" className={styles.close} onClick={this.toggle}>
              &times;
            </a>
          </header>

          <p>House: {house}</p>
          <p>Words: {words}</p>
        </div>
      </div>
    );
  }
}

Pointer.propTypes = {
  details: PropTypes.object.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default Pointer;
