import React from 'react';
import {
  render,
  cleanup,
  screen,
  waitForElement,
} from '@testing-library/react';
import { Destination } from './Destination';
import axiosMock from 'axios';

afterEach(cleanup);

describe('Destination', () => {
  it('Renders <Destination /> component', async () => {
    const route = { destinations: ['GVA'] };
    const url = `${process.env.REACT_APP_API_BASE_URL}/destinations/GVA`;

    axiosMock.get.mockResolvedValueOnce({
      data: { result: { city: 'Geneva', iata: 'GVA' } },
    });

    render(<Destination route={route} />);

    expect(screen.getByText(/Loading/i)).toHaveTextContent('Loading...');

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
  });
});
