import React from 'react';
import { render, screen } from '@testing-library/react';
import { FlightDirection } from './FlightDirection';

describe('FlightDirection', () => {
  it('renders FlightDirection component (arrival)', () => {
    render(<FlightDirection flightDirection="A" />);
    const arrivalElement = screen.getByText(/arrival/i);
    expect(arrivalElement).toBeInTheDocument();
    expect(arrivalElement).toHaveTextContent('Arrival');
  });
  it('renders FlightDirection component (departure)', () => {
    render(<FlightDirection flightDirection="D" />);
    const departureElement = screen.getByText(/departure/i);
    expect(departureElement).toBeInTheDocument();
    expect(departureElement).toHaveTextContent('Departure');
  });
});
