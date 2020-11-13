import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { render } from './../utils/helpers/index';
import { ArrivalTime } from './ArrivalTime';

afterEach(cleanup);

describe('ArrivalTime', () => {
  it('Renders <ArrivalTime /> component', () => {
    render(<ArrivalTime time="2020-11-13T23:59:00.000+01:00" />);

    const arrivalTime = screen.getByText(/23:59/i);

    expect(arrivalTime).toBeInTheDocument();
    // expect(arrivalTime).toHaveTextContent('23:59');
  });
});
