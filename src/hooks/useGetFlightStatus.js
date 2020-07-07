import { useState } from 'react';

export const useGetFlightStatus = ({ initialValue, flightDirection }) => {
  const [flightStatus, setFlightStatus] = useState(initialValue);
  const excludedArrivalStatus = ['EXP', 'FIR', 'SCH'];
  const excludedDepartureStatus = ['WIL', 'SCH'];
  let tempArray = [];

  if (flightDirection === 'A') {
    excludedArrivalStatus.map((item) => {
      console.log('ARR');
      tempArray = flightStatus.filter((status) => status !== item);
      return setFlightStatus(tempArray);
    });
  } else {
    excludedDepartureStatus.map((item) => {
      console.log('DEP');
      tempArray = flightStatus.filter((status) => status !== item);
      return setFlightStatus(tempArray);
    });
  }

  return flightStatus;
};
