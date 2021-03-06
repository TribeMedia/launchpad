/* @flow */

import React from 'react';
import { LoadingSpinner } from '../LoadingSpinner';
import renderer from 'react-test-renderer';

test('renders normal', () => {
  const component = renderer.create(
    <LoadingSpinner size="small" className="test" />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});
