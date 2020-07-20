import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tag } from './Tag';

describe('Tag', () => {
  test('renders Tag component', () => {
    render(<Tag label="Airborne" />);
    const element = screen.getByText(/airborne/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Airborne');
  });
});
