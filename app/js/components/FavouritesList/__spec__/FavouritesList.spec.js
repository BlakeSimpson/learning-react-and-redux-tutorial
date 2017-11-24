import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { pointsMock } from '../../../spec-helper';
import ConnectedFavouritesList, { FavouritesList } from '../';

const noop = () => {};

describe('FavouritesList', () => {
  describe('when there are no points', () => {
    it('matches the snapshot', () => {
      const wrapper = shallow(<FavouritesList points={[]} remove={noop} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('When there are points', () => {
    it('matches the snapshot', () => {
      const wrapper = shallow(
        <FavouritesList points={pointsMock} remove={noop} />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});

describe('ConnectedApp', () => {
  const mockStore = configureStore([]);
  const store = mockStore({ points: pointsMock });

  it('maps store state to the props', () => {
    const wrapper = shallow(<ConnectedFavouritesList store={store} />);

    expect(wrapper).toMatchSnapshot();
  });
});
