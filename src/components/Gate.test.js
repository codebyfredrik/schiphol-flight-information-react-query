import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { renderWithTheme } from './../utils/helpers/index';
import { Gate } from './Gate';

afterEach(cleanup);

describe('Gate', () => {
  test('Renders <Gate /> component', () => {
    renderWithTheme(<Gate gate="D59" />);

    const element = screen.getByText(/d59/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('D59');
  });
});
