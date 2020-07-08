import { useState, useEffect } from 'react';
import { departureStatus } from './../data/departureStatus';
import { arrivalStatus } from './../data/arrivalStatus';

export const useGetFlightStatus = ({ initialValue, flightDirection }) => {
  const excludedArrivalStatus = new Set(['EXP', 'FIR', 'SCH']);
  const excludedDepartureStatus = new Set(['SCH']);
  let publicState = new Set(initialValue);
  let [statusResults, setStatusResults] = useState();

  useEffect(() => {
    let tempArray = [];
    let results = [];

    if (flightDirection === 'A') {
      tempArray = new Set(
        [...publicState].filter((x) => !excludedArrivalStatus.has(x))
      );
      Array.from(tempArray).map((item) => {
        return arrivalStatus.map((status) => {
          if (status.statusCode === item) {
            results.push(status);
          }
        });
      });
    } else {
      tempArray = new Set(
        [...publicState].filter((x) => !excludedDepartureStatus.has(x))
      );
      Array.from(tempArray).map((item) => {
        return departureStatus.map((status) => {
          if (status.statusCode === item) {
            results.push(status);
          }
        });
      });
    }
    setStatusResults(results);
  }, [
    initialValue,
    flightDirection,
    publicState,
    excludedArrivalStatus,
    excludedDepartureStatus,
  ]);

  return statusResults;
};
