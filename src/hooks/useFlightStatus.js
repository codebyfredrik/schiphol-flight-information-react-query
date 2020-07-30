import { departureStatus } from './../data/departureStatus';
import { arrivalStatus } from './../data/arrivalStatus';

const useFlightStatus = (publicFlightState, flightDirection) => {
  let flightStatus = [];
  let tempArray = [];
  const excludedArrivalStatus = new Set(['EXP', 'FIR', 'SCH']);
  const excludedDepartureStatus = new Set(['SCH']);
  let publicState = new Set(publicFlightState.flightStates);

  if (flightDirection === 'A') {
    tempArray = new Set(
      [...publicState].filter((x) => !excludedArrivalStatus.has(x))
    );

    Array.from(tempArray).map((item) => {
      return arrivalStatus.map((status) => {
        if (status.statusCode === item) {
          flightStatus.push(status);
        }
      });
    });
  } else if (flightDirection === 'D') {
    tempArray = new Set(
      [...publicState].filter((x) => !excludedDepartureStatus.has(x))
    );

    Array.from(tempArray).map((item) => {
      return departureStatus.map((status) => {
        if (status.statusCode === item) {
          flightStatus.push(status);
        }
      });
    });
  }

  flightStatus = flightStatus.slice(0, 1);

  return { flightStatus };
};

export { useFlightStatus };
