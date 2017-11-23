import React from 'react';
import { shallow } from 'enzyme';

import { pointsMock } from '../../../spec-helper';
import { Map } from '../';

describe('Map', () => {
  describe('When there are no points', () => {
    it('matches the snapshot', () => {
      const wrapper = shallow(<Map points={[]} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('When there are points', () => {
    it('matches the snapshot', () => {
      const wrapper = shallow(<Map points={pointsMock} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
