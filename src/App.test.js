import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('Renders <App /> component correctly', () => {
    render(<App />);
  });
  it('Header title and sub-title are visible', () => {
    render(<App />);
    expect(screen.getByText('Amsterdam Schipol Airport')).toBeInTheDocument();
    expect(screen.getByText('Flight Information')).toBeInTheDocument();
  });
  it('Previous page button', () => {
    render(<App />);
    expect(screen.getByText('Previous page')).toBeInTheDocument();
    expect(screen.getByText('Previous page')).toBeDisabled();
  });
  it('Next page button', () => {
    render(<App />);
    expect(screen.getByText('Next page')).toBeInTheDocument();
  });
  it('Filter button', () => {
    render(<App />);
    expect(screen.getByText('Filter')).toBeInTheDocument();
  });
  it('Theme button', () => {
    render(<App />);
    expect(screen.getByText('Dark theme')).toBeInTheDocument();
  });
});
