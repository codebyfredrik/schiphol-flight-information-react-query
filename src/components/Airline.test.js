import * as React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { render } from './../utils/helpers/index';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from '../test/server-handlers';
import { Airline } from './Airline';

const server = setupServer(...handlers);

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
  // test('Airline not found', async () => {
  //   server.use(
  //     rest.get(
  //       `${process.env.REACT_APP_API_BASE_URL}/airlines/:prefixICAO`,
  //       (req, res, ctx) => {
  //         if (!req.params.prefixICAO) {
  //           return res(
  //             ctx.delay(0),
  //             ctx.status(400),
  //             ctx.json({ error: 'No airline with that prefix' })
  //           );
  //         }
  //       }
  //     )
  //   );
  //   render(<Airline prefixICAO="" />);

  //   await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  // });
});
