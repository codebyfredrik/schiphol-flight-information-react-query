import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
// import { renderWithTheme } from './utils/helpers/index';
import { App } from './App';

describe('App', () => {
  it('Renders <App /> component correctly', async () => {
    render(<App />);
    const appTitle = screen.getByText(/amsterdam schipol airport/i);

    expect(appTitle).toHaveTextContent('Amsterdam Schipol Airport');

    // const resolvedElement = await waitForElement(() =>
    //   screen.getByText(/klm/i)
    // );
    // expect(resolvedElement).toHaveTextContent('KLM');
  });
});
