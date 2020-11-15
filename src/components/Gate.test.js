import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './../utils/helpers/index';
import { Gate } from './Gate';

describe('<Gate />', () => {
  test('Renders successfully', () => {
    render(<Gate gate="D59" />);
    expect(screen.getByText(/d59/i)).toHaveTextContent('D59');
  });
});
