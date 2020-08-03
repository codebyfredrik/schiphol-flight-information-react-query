import React from 'react';
import { Flight } from './../components/Flight';
import { RowInformation } from './../components/RowInformation';

const useRenderFlights = (resolvedData, isDarkMode, isFetching) => {
  const renderFlights = () => {
    let currentDate = null;

    const result = resolvedData.data.flights
      .filter((item) => item.flightName === item.mainFlight)
      .map((item) => {
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
    // console.log(result);
    if (result.length !== 0) {
      return result;
    }
  };

  return { renderFlights };
};

export { useRenderFlights };
