import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { render } from './utils/helpers/index';
import { App } from './App';

describe('<App />', () => {
  it('Renders successfully', () => {
    render(<App />);
    const appTitle = screen.getByText(/amsterdam schipol airport/i);
    const subTitle = screen.getByText(/flight information/i);
    const themeButton = screen.getByRole('button', { name: /dark theme/i });
    const filterButton = screen.getByRole('button', { name: /filter/i });
    const earlierFlightsButton = screen.getByRole('button', {
      name: /earlier flights/i,
    });
    const laterFlightsButton = screen.getByRole('button', {
      name: /later flights/i,
    });

    expect(appTitle).toHaveTextContent('Amsterdam Schipol Airport');
    expect(subTitle).toHaveTextContent('Flight Information');

    expect(themeButton).toHaveTextContent('Dark theme');
    fireEvent.click(themeButton);
    expect(themeButton).toHaveTextContent('Light theme');
    fireEvent.click(themeButton);
    expect(themeButton).toHaveTextContent('Dark theme');

    expect(filterButton).toHaveTextContent('Filter');
    fireEvent.click(filterButton);

    expect(earlierFlightsButton).toHaveTextContent('Earlier flights');
    expect(laterFlightsButton).toHaveTextContent('Later flights');
  });
});
