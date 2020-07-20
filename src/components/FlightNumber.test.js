import React from 'react';
import { render, screen } from '@testing-library/react';
import { FlightNumber } from './FlightNumber';

describe('FlightNumber', () => {
  it('renders FlightNumber component', () => {
    render(<FlightNumber flightName="KL0654" />);
    const element = screen.getByText(/kl0654/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('KL0654');
  });
});
