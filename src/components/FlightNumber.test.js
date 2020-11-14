import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './../utils/helpers/index';
import { FlightNumber } from './FlightNumber';

describe('<FlightNumber />', () => {
  it('Renders successfully', () => {
    render(<FlightNumber flightName="KL0654" />);

    const flightNumber = screen.getByText(/kl0654/i);

    expect(flightNumber).toBeInTheDocument();
    expect(flightNumber).toHaveTextContent('KL0654');
  });
});
