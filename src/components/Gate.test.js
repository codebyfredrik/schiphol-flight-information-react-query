import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './../utils/helpers/index';
import { Gate } from './Gate';

describe('<Gate />', () => {
  test('Rendered successfully', () => {
    render(<Gate gate="D59" />);

    const element = screen.getByText(/d59/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('D59');
  });
});
