import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Tag } from './Tag';

afterEach(cleanup);

describe('Tag', () => {
  test('Renders <Tag /> component', () => {
    render(<Tag label="Airborne" />);

    const element = screen.getByText(/airborne/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Airborne');
  });
});
