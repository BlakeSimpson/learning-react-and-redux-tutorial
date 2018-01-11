import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { addFavourite, removeFavourite } from '../../actions';
import styles from './Pointer.css';

class Pointer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      open: false
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
    const { index, favourite, removeFavourite, addFavourite } = this.props;

    if (favourite) {
      removeFavourite(index);
    } else {
      addFavourite(index);
    }
  }

  render () {
    const { x, y, details, favourite } = this.props;
    const { name, house, words } = details;

    const pointerClasses = classNames(styles.pointer, {
      [styles.favourite]: favourite
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
                {favourite ? '–' : '+'}
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
  addFavourite: PropTypes.func,
  removeFavourite: PropTypes.func,
  index: PropTypes.number,
  details: PropTypes.object.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  favourite: PropTypes.bool
};

const mapDispatchToProps = dispatch => {
  return {
    addFavourite: index => {
      dispatch(addFavourite(index));
    },

    removeFavourite: index => {
      dispatch(removeFavourite(index));
    }
  };
};

const ConnectedPointer = connect(null, mapDispatchToProps)(Pointer);

export default ConnectedPointer;
