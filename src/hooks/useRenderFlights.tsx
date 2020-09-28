import React from 'react';
import { Flight } from '../components/Flight';
import { RowInformation } from '../components/RowInformation';

const useRenderFlights = (
  resolvedData: any,
  isDarkMode: boolean,
  isFetching: boolean
) => {
  const renderFlights = (): void => {
    let currentDate: string | null = null;

    const result = resolvedData.data.flights
      .filter((item: any) => item.flightName === item.mainFlight)
      .map((item: any) => {
        if (item.scheduleDate !== currentDate) {
          currentDate = item.scheduleDate;
          return (
            <React.Fragment key={item.id}>
              <RowInformation
                date={item.scheduleDate}
                isFetching={isFetching}
              />
              <Flight key={item.id} flight={item} isDarkMode={isDarkMode} />
            </React.Fragment>
          );
        } else {
          return <Flight key={item.id} flight={item} isDarkMode={isDarkMode} />;
        }
      });

    if (result.length !== 0) {
      return result;
    }
  };

  return { renderFlights };
};

export { useRenderFlights };
