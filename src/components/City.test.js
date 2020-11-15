import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { render } from './../utils/helpers/index';
import { setupServer } from 'msw/node';
import { handlers } from '../test/server-handlers';
import { City } from './City';

const server = setupServer(...handlers);

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
