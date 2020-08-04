import PropTypes from 'prop-types';

const useFlightDirection = (flightDirection) => {
  let phrase;

  if (flightDirection === 'A') {
    phrase = 'Arrival';
  } else if (flightDirection === 'D') {
    phrase = 'Departure';
  }

  return phrase;
};

useFlightDirection.propTypes = {
  flightDirection: PropTypes.string,
};

export { useFlightDirection };
