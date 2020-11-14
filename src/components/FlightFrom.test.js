import React from 'react';
import { screen, waitForElement } from '@testing-library/react';
import { render } from './../utils/helpers/index';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { FlightFrom } from './FlightFrom';

const server = setupServer(
  rest.get(
    `${process.env.REACT_APP_API_BASE_URL}/airlines/KL`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ publicName: 'KLM' }));
    }
  )
);

// Enable API mocking before tests
beforeAll(() => server.listen());

// Reset any runtime request handlers that may be added during the tests
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done
afterAll(() => server.close());

describe('FlightFrom', () => {
  it('Renders <FlightFrom /> component correctly', async () => {
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

    const resolvedElement = await waitForElement(() =>
      screen.getByText(/kl1942/i)
    );
    expect(resolvedElement).toHaveTextContent('KLM (KL1942) flight to');
  });
  it('Renders <FlightFrom /> component correctly', async () => {
    const prefixICAO = 'KL';
    const flightName = 'KL1942';
    const direction = 'from';

    render(
      <FlightFrom
        prefixICAO={prefixICAO}
        flightName={flightName}
        direction={direction}
      />
    );

    const resolvedElement = await waitForElement(() =>
      screen.getByText(/kl1942/i)
    );
    expect(resolvedElement).toHaveTextContent('KLM (KL1942) flight from');
  });
});
