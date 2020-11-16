import { screen } from '@testing-library/react';
import { render } from '../utils/helpers/index';
import { FlightDirectionTag } from './FlightDirectionTag';

describe('<FlightDirectionTag />', () => {
  test('Renders successfully', () => {
    render(<FlightDirectionTag flightDirection="A" />);
    expect(screen.getByText(/arrival/i)).toHaveTextContent('Arrival');
  });
});
