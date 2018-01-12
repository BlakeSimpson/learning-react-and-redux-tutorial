import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { pointsMock } from '../../../spec-helper';
import ConnectedMap, { Map } from '../';

describe('Map component', () => {
  describe('when there are no points', () => {
    it('matches the snapshot', () => {
      const wrapper = shallow(<Map points={[]} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when there are points', () => {
    it('matches the snapshot', () => {
      const wrapper = shallow(<Map points={pointsMock} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});

describe('ConnectedMap component', () => {
  const mockStore = configureStore([]);
  const store = mockStore({ points: pointsMock });

  it('maps store state to the props', () => {
    const wrapper = shallow(<ConnectedMap store={store} />);

    expect(wrapper).toMatchSnapshot();
  });
});
