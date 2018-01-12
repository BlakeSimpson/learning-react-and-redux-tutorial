import React from 'react';
import { shallow } from 'enzyme';

import { pointsMock } from '../../../spec-helper';
import { Map } from '../';

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
