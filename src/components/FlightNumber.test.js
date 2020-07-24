import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { renderWithTheme } from './../utils/helpers/index';
import { FlightNumber } from './FlightNumber';

afterEach(cleanup);

describe('FlightNumber', () => {
  it('Renders <FlightNumber /> component', () => {
    renderWithTheme(<FlightNumber flightName="KL0654" />);

    const element = screen.getByText(/kl0654/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('KL0654');
  });
});
