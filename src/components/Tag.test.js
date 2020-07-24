import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { renderWithTheme } from './../utils/helpers/index';
import { Tag } from './Tag';

afterEach(cleanup);

describe('Tag', () => {
  test('Renders <Tag /> component', () => {
    renderWithTheme(<Tag label="Airborne" />);

    const element = screen.getByText(/airborne/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Airborne');
  });
});
