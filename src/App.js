import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useToggle, useDarkMode } from './hooks/index';
import { Theme } from './components/Theme';
import { ReactQueryDevtools } from 'react-query-devtools';
import { GlobalStyle } from './components/GlobalStyle';
import { Header } from './components/Header';
import { Overlay } from './components/Overlay';
import {
  FlightsView,
  FlightDepartureView,
  FlightArrivalView,
} from './views/index';

const App = () => {
  const [page, setPage] = useState(0);
  const [flightDirection, setFlightDirection] = useState('');
  const [overlayIsVisible, setOverlayIsVisible] = useToggle();
  const { toggleDarkMode, isDarkMode } = useDarkMode('dark');

  return (
    <Theme isDarkMode={isDarkMode}>
      <>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyle />
        <Header />
        {overlayIsVisible && (
          <Overlay
            setFlightDirection={setFlightDirection}
            setOverlayIsVisible={setOverlayIsVisible}
            setPage={setPage}
            overlayIsVisible={overlayIsVisible}
            flightDirection={flightDirection}
          />
        )}
        <div>
          <Switch>
            <Route exact path="/">
              <FlightsView
                page={page}
                setPage={setPage}
                flightDirection={flightDirection}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                setOverlayIsVisible={setOverlayIsVisible}
              />
            </Route>
            <Route exact path="/departures/:date/flights/:id">
              <FlightDepartureView
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            </Route>
            <Route exact path="/arrivals/:date/flights/:id">
              <FlightArrivalView
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            </Route>
          </Switch>
        </div>
      </>
    </Theme>
  );
};

export { App };
