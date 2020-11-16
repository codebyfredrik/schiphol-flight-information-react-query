import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { render } from './../utils/helpers/index';
import { setupServer } from 'msw/node';
import { handlers } from '../test/server-handlers';
import { Destination } from './Destination';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<Destination />', () => {
  test('Renders successfully', async () => {
    const route = { destinations: ['GVA'] };
    render(<Destination route={route} />);

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    expect(screen.getByText(/geneva/i)).toHaveTextContent('Geneva (GVA)');
  });
});
