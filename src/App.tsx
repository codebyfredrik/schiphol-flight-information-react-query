import * as React from 'react';
import { Switch, Route} from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';
import { useToggle, useDarkMode, useStickyState, useStickyHeader } from './hooks/index';
import { GlobalStyle, Header, Overlay, StickyWrapper as StickyHeader, ScrollToTop } from './components/index';
import { ThemeProvider } from './components/Theme';
import { Background } from './styles/styles';
import {
  FlightsView,
  FlightDepartureView,
  FlightArrivalView,
  NotFoundView
} from './views/index';

const App = () => {
  const [page, setPage] = React.useState<number>(0);
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
            <ScrollToTop>
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
              <Route path="/departures/:date/flights/:id">
                <FlightDepartureView isDarkMode={isDarkMode} />
              </Route>
              <Route path="/arrivals/:date/flights/:id">
                <FlightArrivalView isDarkMode={isDarkMode} />
              </Route>
              <Route component={NotFoundView} />
              </Switch>
            </ScrollToTop> 
        </div>
      </>
    </ThemeProvider>
  );
};

export { App };
