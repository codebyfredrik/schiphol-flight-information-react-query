import * as React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { render } from './../utils/helpers/index';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Airline } from './Airline';

const server = setupServer(
  rest.get(
    `${process.env.REACT_APP_API_BASE_URL}/airlines/:prefixICAO`,
    (req, res, ctx) => {
      if (!req.params.prefixICAO) {
        return res(
          ctx.status(400),
          ctx.json({ message: 'prefixICAO required' })
        );
      }
      return res(ctx.status(200), ctx.json({ publicName: 'KLM' }));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<Airline />', () => {
  test('Renders successfully with prefixICAO prop', async () => {
    const prefixICAO = 'KL';

    render(<Airline prefixICAO={prefixICAO} />);

    expect(screen.getByText(/loading/i)).toHaveTextContent('Loading...');
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    expect(screen.getByText(/klm/i)).toBeInTheDocument();
  });
});
