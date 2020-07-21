import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { App } from './App';

afterEach(cleanup);

describe('App', () => {
  it('Renders <App /> component', () => {
    render(<App />);
    expect(screen.getByText('Amsterdam Schipol Airport')).toBeInTheDocument();
    expect(screen.getByText('Flight Information')).toBeInTheDocument();
    expect(screen.getByText('Previous page')).toBeInTheDocument();
    expect(screen.getByText('Previous page')).toBeDisabled();
    expect(screen.getByText('Next page')).toBeInTheDocument();
    expect(screen.getByText('Filter')).toBeInTheDocument();
    expect(screen.getByText('Dark theme')).toBeInTheDocument();
  });
});
