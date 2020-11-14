import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './../utils/helpers/index';
import { DateTime } from './DateTime';

describe('<DateTime />', () => {
  test('Renders successfully', () => {
    render(<DateTime date="2020-11-14T12:25:00.000+01:00" format="MMM D" />);

    const date = screen.getByText(/nov/i);

    expect(date).toHaveTextContent('Nov 14');
  });
});
