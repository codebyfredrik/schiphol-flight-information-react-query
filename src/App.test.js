import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
  test('Header title and sub-title are visible', () => {
    render(<App />);
    expect(screen.getByText('Amsterdam Schipol Airport')).toBeInTheDocument();
    expect(screen.getByText('Flight Information')).toBeInTheDocument();
  });
  test('Previous page button', () => {
    render(<App />);
    expect(screen.getByText('Previous page')).toBeInTheDocument();
    expect(screen.getByText('Previous page')).toBeDisabled();
  });
  test('Next page button', () => {
    render(<App />);
    expect(screen.getByText('Next page')).toBeInTheDocument();
  });
  test('Filter button', () => {
    render(<App />);
    expect(screen.getByText('Filter')).toBeInTheDocument();
  });
  test('Theme button', () => {
    render(<App />);
    expect(screen.getByText('Dark theme')).toBeInTheDocument();
  });
});
