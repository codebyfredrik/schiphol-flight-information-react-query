import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { render } from './../utils/helpers/index';
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
});
