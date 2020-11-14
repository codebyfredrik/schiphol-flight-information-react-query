import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './../utils/helpers/index';
import { DisplayDate } from './DisplayDate';

describe('<DisplayDate />', () => {
  test('Renders successfully', () => {
    render(<DisplayDate date="2020-11-14T12:25:00.000+01:00" />);

    const date = screen.getByText(/november/i);

    expect(date).toHaveTextContent('Today, November 14');
  });
});
