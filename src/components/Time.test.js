import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { renderWithTheme } from './../utils/helpers/index';
import { Time } from './Time';

afterEach(cleanup);

describe('Time', () => {
  test('Renders <Time /> component', () => {
    renderWithTheme(<Time time="18:35:00" />);

    const element = screen.getByText(/18:35/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('18:35');
  });
});
