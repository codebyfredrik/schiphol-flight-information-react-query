import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { render } from './../utils/helpers/index';
import { setupServer } from 'msw/node';
import { handlers } from '../test/server-handlers';
import { FlightFrom } from './FlightFrom';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<FlightFrom />', () => {
  it('Renders successfully with airline and flight prop', async () => {
    const prefixICAO = 'KL';
    const flightName = 'KL1942';
    const direction = 'to';

    render(
      <FlightFrom
        prefixICAO={prefixICAO}
        flightName={flightName}
        direction={direction}
      />
    );

    const resolvedElement = await waitFor(() => screen.getByText(/kl1942/i));
    expect(resolvedElement).toHaveTextContent('KLM (KL1942) flight to');
  });
  it('Renders successfully without airline and flight prop', async () => {
    const prefixICAO = '';
    const flightName = '';
    const direction = 'from';

    render(
      <FlightFrom
        prefixICAO={prefixICAO}
        flightName={flightName}
        direction={direction}
      />
    );

    const resolvedElement = await waitFor(() =>
      screen.getByText(/flight from/i)
    );
    expect(resolvedElement).toHaveTextContent('Flight from');
  });
});
