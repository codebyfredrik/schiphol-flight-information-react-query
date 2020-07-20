import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { Destination, query } from './Destination';

jest.mock('axios');

describe('Destination', () => {
  it('Renders <Destination /> component', async () => {
    const data = {
      city: 'Geneva',
      country: 'Switzerland',
      iata: 'GVA',
      publicName: {
        dutch: 'Geneve',
        english: 'Geneva',
      },
    };

    const object = { destinations: ['GVA'] };
    render(<Destination route={object} />);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
