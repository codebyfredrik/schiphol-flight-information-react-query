import { useEffect, useState } from 'react';
import { departureStatus } from './../data/departureStatus';
import { arrivalStatus } from './../data/arrivalStatus';

const useFlightStatus = (publicFlightState, flightDirection) => {
  const [flightStatus, setFlightStatus] = useState();
  const excludedArrivalStatus = new Set(['EXP', 'FIR', 'SCH']);
  const excludedDepartureStatus = new Set(['SCH']);

  // console.log(publicState);
  useEffect(() => {
    let tempArray = [];
    let statusResults = [];
    let publicState = new Set(publicFlightState.flightStates);
    // console.log(publicState);
    // console.log('useFlightStatus');
    if (flightDirection === 'A') {
      // console.log('Arrival', publicState);

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
      setFlightStatus(statusResults);
      // console.log('useEffect Arrival', flightStatus);
    } else {
      // console.log('Departure', publicState);

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
      setFlightStatus(statusResults);
      // console.log('useEffect Departure', flightStatus);
    }
  }, []);
  console.log(flightStatus);
  return { flightStatus };
};

export { useFlightStatus };
