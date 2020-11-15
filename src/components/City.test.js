import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
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

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<City />', () => {
  it('Renders successfully', async () => {
    const route = { destinations: ['GVA'], eu: 'N', visa: false };
    render(<City route={route} />);

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    expect(screen.getByText(/geneva/i)).toHaveTextContent('Geneva');
  });
});
