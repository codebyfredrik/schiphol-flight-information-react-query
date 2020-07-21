import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Gate } from './Gate';

afterEach(cleanup);

describe('Gate', () => {
  test('Renders <Gate /> component', () => {
    render(<Gate gate="D59" />);

    const element = screen.getByText(/d59/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('D59');
  });
});
