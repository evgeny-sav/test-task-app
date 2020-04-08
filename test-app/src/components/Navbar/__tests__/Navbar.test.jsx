import React from 'react';
import { create } from 'react-test-renderer';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('should render', () => {
    const component = create(<Navbar />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
