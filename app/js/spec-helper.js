import 'raf/polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export const pointsMock = [
  {
    id: 1,
    x: 450,
    y: 110,
    details: {
      name: 'The Wall',
      house: "Night's Watch",
      words: 'Night gathers, and now my watch begins.'
    },
    favourite: true
  },
  {
    id: 2,
    x: 375,
    y: 355,
    details: {
      name: 'Winterfell',
      house: 'Stark',
      words: 'Winter is Coming'
    },
    favourite: false
  }
];
