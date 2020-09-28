type phrase = string | undefined;

const useFlightDirection = (flightDirection: string): phrase => {
  let phrase;

  if (flightDirection === 'A') {
    phrase = 'Arrival';
  } else if (flightDirection === 'D') {
    phrase = 'Departure';
  }

  return phrase;
};

export { useFlightDirection };
