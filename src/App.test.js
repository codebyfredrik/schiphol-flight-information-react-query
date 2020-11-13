import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './utils/helpers/index';
import { App } from './App';

describe('App', () => {
  it('Renders <App /> component correctly', () => {
    render(<App />);
    const appTitle = screen.getByText(/amsterdam schipol airport/i);
    const subTitle = screen.getByText(/flight information/i);
    const darkTheme = screen.getByRole('button', { name: /dark theme/i });
    const filter = screen.getByRole('button', { name: /filter/i });
    const earlierFlights = screen.getByRole('button', {
      name: /earlier flights/i,
    });
    const laterFlights = screen.getByRole('button', { name: /later flights/i });

    expect(appTitle).toHaveTextContent('Amsterdam Schipol Airport');
    expect(subTitle).toHaveTextContent('Flight Information');
    expect(darkTheme).toHaveTextContent('Dark theme');
    expect(filter).toHaveTextContent('Filter');
    expect(earlierFlights).toHaveTextContent('Earlier flights');
    expect(laterFlights).toHaveTextContent('Later flights');
  });
});
