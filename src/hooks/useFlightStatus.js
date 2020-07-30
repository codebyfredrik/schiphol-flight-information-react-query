import { useEffect, useState } from 'react';
import { departureStatus } from './../data/departureStatus';
import { arrivalStatus } from './../data/arrivalStatus';

const useFlightStatus = (publicFlightState, flightDirection) => {
  const [flightStatus, setFlightStatus] = useState(null);

  useEffect(() => {
    let tempArray = [];
    let statusResults = [];
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
            statusResults.push(status);
          }
        });
      });
      setFlightStatus(statusResults.slice(0, 1));
    } else if (flightDirection === 'D') {
      tempArray = new Set(
        [...publicState].filter((x) => !excludedDepartureStatus.has(x))
      );

      Array.from(tempArray).map((item) => {
        return departureStatus.map((status) => {
          if (status.statusCode === item) {
            statusResults.push(status);
          }
        });
      });
      setFlightStatus(statusResults.slice(0, 1));
    }
  }, [flightDirection, publicFlightState.flightStates]);

  return { flightStatus };
};

export { useFlightStatus };
