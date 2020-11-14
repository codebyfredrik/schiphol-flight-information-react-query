import React from 'react';
import { screen, waitForElement } from '@testing-library/react';
import { render } from './../utils/helpers/index';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { City } from './City';

const server = setupServer(
  rest.get(
    `${process.env.REACT_APP_API_BASE_URL}/destinations/GVA`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ city: 'Geneva', iata: 'GVA' }));
    }
  )
);

// Enable API mocking before tests
beforeAll(() => server.listen());

// Reset any runtime request handlers that may be added during the tests
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done
afterAll(() => server.close());

describe('<City />', () => {
  it('Renders successfully', async () => {
    const route = { destinations: ['GVA'] };
    render(<City route={route} />);

    const loading = screen.getByText(/loading/i);
    expect(loading).toHaveTextContent('Loading...');

    const resolvedElement = await waitForElement(() =>
      screen.getByText(/geneva/i)
    );
    expect(resolvedElement).toHaveTextContent('Geneva');
  });
});
