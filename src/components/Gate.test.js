import React from 'react';
import { render, screen } from '@testing-library/react';
import { Gate } from './Gate';

describe('Gate', () => {
  test('renders Gate component', () => {
    render(<Gate gate="D59" />);
    const element = screen.getByText(/d59/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('D59');
  });
});
