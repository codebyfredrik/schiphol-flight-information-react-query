import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { render } from '../utils/helpers/index';
import { Time } from './Time';

afterEach(cleanup);

describe('Time', () => {
  test('Renders <Time /> component', () => {
    render(<Time time="2020-11-13T23:59:00.000+01:00" />);
    const element = screen.getByText(/23:59/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('23:59');
  });
});
