import React from 'react';
import {
  screen,
  waitForElement,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { render } from './../utils/helpers/index';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Destination } from './Destination';

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

describe('<Destination />', () => {
  it('Renders successfully', async () => {
    const route = { destinations: ['GVA'] };

    render(<Destination route={route} />);

    // expect().toHaveTextContent('Loading...');

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    // const resolvedElement = await waitForElement(() =>

    // );
    expect(screen.getByText(/geneva/i)).toHaveTextContent('Geneva (GVA)');
  });
});
