import React from 'react';
import { shallow } from 'enzyme';
import IconButton from '@material-ui/core/IconButton';

import Header from './Header';

let headerComponent;
beforeEach(() => {
  headerComponent = shallow(<Header />);
});

afterEach(() => {
  headerComponent.unmount();
});

it('renders without crashing', () => {
  expect(headerComponent.length).toBe(1);
});

it('opens the menu when the hamburger menu is clicked', () => {
  headerComponent.find(IconButton).first().simulate('click');
  expect(headerComponent.state().menu).toBe(true);
});

it('closes the menu when the menu close button is clicked', () => {
  headerComponent.setState({
    menu: true,
  });
  headerComponent.find(IconButton).last().simulate('click');
  expect(headerComponent.state().menu).toBe(false);
});
