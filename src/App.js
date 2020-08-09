import React, { useState } from 'react';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';
import { useToggle, useDarkMode } from './hooks/index';
import { Theme } from './components/Theme';
import { ReactQueryDevtools } from 'react-query-devtools';
import { GlobalStyle } from './components/GlobalStyle';
import { Overlay } from './components/Overlay';
import {
  FlightsView,
  FlightDepartureView,
  FlightArrivalView,
} from './views/index';

const StyledApp = styled.div`
  /* max-width: 1000px;
  margin: auto;
  padding: 0 1rem; */
`;

const HeaderContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 1.5rem 1rem;
`;

const Header = styled.header`
  /* background-color: #210e71; */
  background: linear-gradient(to right, #073590, #0d49c0);
  /* margin-bottom: var(--container-margin); */
  border-bottom: 2px solid ${({ theme }) => theme.colors.yellow};
`;

const Title = styled.h1`
  display: inline-block;
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  color: ${({ theme }) => theme.colors.yellow};

  @media screen and (min-width: 380px) {
    font-size: 2rem;
    line-height: 2rem;
  }

  @media screen and (min-width: 520px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const SubTitle = styled.h3`
  display: inline-block;
  margin: 0;
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 0.25rem;
  letter-spacing: 0.25rem;
  font-family: 'Source Sans Pro', sans-serif;
  color: ${({ theme }) => theme.colors.subTitle};

  @media screen and (min-width: 520px) {
    font-size: 1.25rem;
    line-height: 1.25rem;
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
`;

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
        <Header>
          <HeaderContainer>
            <div>
              <StyledLink to="/">
                <Title>Amsterdam Schipol Airport</Title>
              </StyledLink>
            </div>
            <StyledLink to="/">
              <SubTitle>Flight Information</SubTitle>
            </StyledLink>
          </HeaderContainer>
        </Header>
        {overlayIsVisible && (
          <Overlay
            setFlightDirection={setFlightDirection}
            setOverlayIsVisible={setOverlayIsVisible}
            setPage={setPage}
            overlayIsVisible={overlayIsVisible}
            flightDirection={flightDirection}
          />
        )}
        <StyledApp>
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
        </StyledApp>
      </>
    </Theme>
  );
};

export { App };
