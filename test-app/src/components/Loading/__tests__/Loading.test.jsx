import React from 'react';
import { create } from 'react-test-renderer';
import Loading from '../Loading';

describe('Loading', () => {
  it('should render', () => {
    const component = create(<Loading />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
