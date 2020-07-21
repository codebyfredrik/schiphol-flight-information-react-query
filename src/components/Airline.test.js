import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Airline } from './Airline';

const server = setupServer(
  rest.get(
    `${process.env.REACT_APP_API_BASE_URL}/airlines/KL`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ publicName: 'KLM' }));
    }
  )
);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('Destination', () => {
  it('Renders <Destination /> component correctly', async () => {
    const prefixICAO = 'KL';

    render(<Airline prefixICAO={prefixICAO} />);

    expect(screen.getByText(/Loading/i)).toHaveTextContent('Loading...');

    const resolvedElement = await waitForElement(() =>
      screen.getByText(/klm/i)
    );
    expect(resolvedElement).toHaveTextContent('KLM');
  });
});
