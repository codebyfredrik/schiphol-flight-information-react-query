import React, { useState } from 'react';
import { Switch, Route} from 'react-router-dom';
import { useToggle, useDarkMode } from './hooks/index';
import { ThemeProvider } from './components/Theme';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Background } from './styles/styles';
import { GlobalStyle } from './components/GlobalStyle';
import { Header } from './components/Header';
import { Overlay } from './components/Overlay';
import {
  FlightsView,
  FlightDepartureView,
  FlightArrivalView,
} from './views/index';
import { StickyWrapper as StickyHeader } from './components/StickyWrapper';
import { useStickyHeader } from './hooks/useStickyHeader';
import { ScrollToTop } from './components/ScrollToTop';
import {useStickyState} from './hooks/index'

const App = () => {
  const [page, setPage] = useState<number>(0);
  // const [flightDirection, setFlightDirection] = useState<string>('');
  const [flightDirection, setFlightDirection] = useStickyState('', 'flight-direction')
  const [overlayIsVisible, setOverlayIsVisible] = useToggle();
  const { toggleDarkMode, isDarkMode } = useDarkMode();
  const [isSticky, ref] = useStickyHeader(125, 1);

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <>
        <Background />
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyle />
        <StickyHeader ref={ref}>
          <Header sticky={isSticky} />
        </StickyHeader>
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
            <ScrollToTop>
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
                <FlightDepartureView isDarkMode={isDarkMode} />
              </Route>
              <Route exact path="/arrivals/:date/flights/:id">
                <FlightArrivalView isDarkMode={isDarkMode} />
              </Route>
            </ScrollToTop>
          </Switch>
        </div>
      </>
    </ThemeProvider>
  );
};

export { App };
