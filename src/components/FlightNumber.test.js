import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { FlightNumber } from './FlightNumber';

afterEach(cleanup);

describe('FlightNumber', () => {
  it('Renders <FlightNumber /> component', () => {
    render(<FlightNumber flightName="KL0654" />);

    const element = screen.getByText(/kl0654/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('KL0654');
  });
});
