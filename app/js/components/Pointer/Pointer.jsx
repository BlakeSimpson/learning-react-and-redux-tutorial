import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Pointer.css';

class Pointer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      open: false,
      favourite: props.favourite
    };

    this.toggle = this.toggle.bind(this);
    this.favourite = this.favourite.bind(this);
  }

  toggle (event) {
    event.preventDefault();

    if (event.target === event.currentTarget) {
      this.setState({ open: !this.state.open });
    }
  }

  favourite () {
    this.setState({ favourite: !this.state.favourite });
  }

  render () {
    const { x, y, details } = this.props;
    const { name, house, words } = details;

    const pointerClasses = classNames(styles.pointer, {
      [styles.favourite]: this.state.favourite
    });

    const detailsClasses = classNames(styles.details, {
      [styles.hidden]: !this.state.open
    });

    return (
      <div
        className={pointerClasses}
        style={{ left: x, top: y }}
        onClick={this.toggle}
      >
        <div className={detailsClasses}>
          <header className={styles.headline}>
            <h3>{name}</h3>

            <div className={styles.detailsControls}>
              <a href="#" className={styles.control} onClick={this.favourite}>
                {this.state.favourite ? '–' : '+'}
              </a>
              <a href="#" className={styles.control} onClick={this.toggle}>
                &times;
              </a>
            </div>
          </header>

          <p>House: {house}</p>
          <p>Words: {words}</p>
        </div>
      </div>
    );
  }
}

Pointer.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  details: PropTypes.object,
  favourite: PropTypes.bool
};

export default Pointer;
