import PropTypes from 'prop-types';

const FlightDirection = ({ flightDirection }) => {
  let phrase;

  if (flightDirection === 'A') {
    phrase = 'Arrival';
  } else if (flightDirection === 'D') {
    phrase = 'Departure';
  }

  return phrase;
};

FlightDirection.propTypes = {
  flightDirection: PropTypes.string,
};

export { FlightDirection };
