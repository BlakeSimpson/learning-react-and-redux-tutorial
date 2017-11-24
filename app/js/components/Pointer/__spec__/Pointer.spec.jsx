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
  id: 42,
  x: 99,
  y: 88,
  details: {
    name: 'Somewhere',
    house: 'Bungalow',
    words: 'Hello'
  },
  favourite: true
};

describe('Pointer', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Pointer {...pointerProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('when the toggle button is clicked', () => {
    it('changes open state to true, if it is false', () => {
      const wrapper = mount(<Pointer {...pointerProps} />);

      wrapper.find('a[href="#toggle"]').simulate('click');

      expect(wrapper.state('open')).toEqual(true);
    });

    it('changes open state to true, if it is false', () => {
      const wrapper = mount(<Pointer {...pointerProps} />);

      wrapper.setState({ open: true });
      wrapper.find('a[href="#toggle"]').simulate('click');

      expect(wrapper.state('open')).toEqual(false);
    });
  });
});

describe('ConnectedApp', () => {
  const mockStore = configureStore([]);
  const store = mockStore({ points: pointsMock });

  beforeEach(() => {
    store.clearActions();
  });

  it('maps store state to the props', () => {
    const wrapper = shallow(<ConnectedPointer store={store} />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('when the favourite button is clicked', () => {
    it('calls the removeFavourite action if the pointer is a favourite', () => {
      const wrapper = mount(
        <ConnectedPointer {...pointerProps} store={store} />
      );
      const expectedAction = [removeFavourite(42)];

      wrapper.find('a[href="#favourite"]').simulate('click');

      expect(store.getActions()).toEqual(expectedAction);
    });

    it('calls the removeFavourite action if the pointer is a favourite', () => {
      const abc = { favourite: false };
      const modifiedPointerProps = Object.assign({}, pointerProps, abc);

      const wrapper = mount(
        <ConnectedPointer {...modifiedPointerProps} store={store} />
      );
      const expectedAction = [addFavourite(42)];

      wrapper.find('a[href="#favourite"]').simulate('click');

      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
