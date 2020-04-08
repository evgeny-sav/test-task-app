import React from 'react';
import { create } from 'react-test-renderer';
import GoBackButton from '../GoBackButton';

describe('GoBackButton', () => {
  it('should render', () => {
    const component = create(<GoBackButton />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
