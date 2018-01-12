import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import { pointsMock } from '../../../spec-helper';
import { addFavourite, removeFavourite } from '../../../actions';
import ConnectedPointer, { Pointer } from '../';

const noop = () => {};

const pointerProps = {
  addFavourite: noop,
  removeFavourite: noop,
  id: 'point-42',
  x: 99,
  y: 88,
  details: {
    name: 'Winterfell',
    house: 'Stark',
    words: 'Winter is Coming'
  },
  favourite: true
};

describe('Pointer component', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Pointer {...pointerProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('when the toggle button is clicked', () => {
    it('changes the open state to true, if it is false', () => {
      const wrapper = mount(<Pointer {...pointerProps} />);

      wrapper.find('a[href="#toggle"]').simulate('click');

      expect(wrapper.state('open')).toEqual(true);
    });

    it('changes the open state to false, if it is true', () => {
      const wrapper = mount(<Pointer {...pointerProps} />);

      wrapper.setState({ open: true });
      wrapper.find('a[href="#toggle"]').simulate('click');

      expect(wrapper.state('open')).toEqual(false);
    });
  });
});

describe('ConnectedPointer component', () => {
  const mockStore = configureStore([]);
  const store = mockStore({ points: pointsMock });

  beforeEach(() => {
    store.clearActions();
  });

  it('maps store state to the props', () => {
    const wrapper = shallow(
      <ConnectedPointer store={store} x={1} y={2} details={{}} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('when the favourite button is clicked', () => {
    it('calls the removeFavourite action if the pointer is a favourite', () => {
      const wrapper = mount(
        <ConnectedPointer {...pointerProps} store={store} />
      );
      const expectedAction = [removeFavourite('point-42')];

      wrapper.find('a[href="#favourite"]').simulate('click');

      expect(store.getActions()).toEqual(expectedAction);
    });

    it('calls the addFavourite action if the pointer is a favourite', () => {
      const updatedFavouriteState = { favourite: false };
      const modifiedPointerProps = Object.assign(
        {},
        pointerProps,
        updatedFavouriteState
      );

      const wrapper = mount(
        <ConnectedPointer {...modifiedPointerProps} store={store} />
      );
      const expectedAction = [addFavourite('point-42')];

      wrapper.find('a[href="#favourite"]').simulate('click');

      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
