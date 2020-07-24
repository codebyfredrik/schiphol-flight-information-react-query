import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { renderWithTheme } from './../utils/helpers/index';
import { FlightDirection } from './FlightDirection';

afterEach(cleanup);

describe('FlightDirection', () => {
  it('Renders <FlightDirection /> component (arrival)', () => {
    renderWithTheme(<FlightDirection flightDirection="A" />);

    const arrivalElement = screen.getByText(/arrival/i);

    expect(arrivalElement).toBeInTheDocument();
    expect(arrivalElement).toHaveTextContent('Arrival');
  });
  it('Renders <FlightDirection /> component (departure)', () => {
    renderWithTheme(<FlightDirection flightDirection="D" />);

    const departureElement = screen.getByText(/departure/i);

    expect(departureElement).toBeInTheDocument();
    expect(departureElement).toHaveTextContent('Departure');
  });
});
