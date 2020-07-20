import React from 'react';
import { render, screen } from '@testing-library/react';
import { Time } from './Time';

describe('Time', () => {
  test('renders Time component', () => {
    render(<Time time="18:35:00" />);
    const element = screen.getByText(/18:35/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('18:35');
  });
});
