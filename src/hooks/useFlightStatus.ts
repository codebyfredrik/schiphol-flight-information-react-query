import { departureStatus } from '../data/departureStatus';
import { arrivalStatus } from '../data/arrivalStatus';

const useFlightStatus = (
  publicFlightState: any,
  flightDirection: any
): { flightStatus: any } => {
  let flightStatus: any = [];
  let tempArray: any = [];
  const excludedArrivalStatus = new Set(['EXP', 'FIR', 'SCH']);
  const excludedDepartureStatus = new Set(['SCH']);
  let publicState: any = new Set(publicFlightState.flightStates);

  if (flightDirection === 'A') {
    tempArray = new Set(
      [...publicState].filter((x) => !excludedArrivalStatus.has(x))
    );

    Array.from(tempArray).map((item) => {
      return arrivalStatus.map((status) => {
        if (status.statusCode === item) {
          flightStatus.push(status);
        }
        return status;
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
        return status;
      });
    });
  }

  flightStatus = flightStatus.slice(0, 1);

  return { flightStatus };
};

export { useFlightStatus };
