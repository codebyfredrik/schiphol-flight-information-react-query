import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './../utils/helpers/index';
import { Tag } from './Tag';

describe('<Tag />', () => {
  test('Renders successfully', () => {
    render(<Tag label="Airborne" />);

    const element = screen.getByText(/airborne/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Airborne');
  });
});
