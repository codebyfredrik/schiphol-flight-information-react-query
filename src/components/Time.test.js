import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Time } from './Time';

afterEach(cleanup);

describe('Time', () => {
  test('Renders <Time /> component', () => {
    render(<Time time="18:35:00" />);

    const element = screen.getByText(/18:35/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('18:35');
  });
});
