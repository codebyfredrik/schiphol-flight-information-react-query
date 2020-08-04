import React, { useState } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { useToggle, useDarkMode } from './hooks/index';
import { Theme } from './components/Theme';
import { ReactQueryDevtools } from 'react-query-devtools';
import { GlobalStyle } from './components/GlobalStyle';
import { Overlay } from './components/Overlay';
import { FlightsView } from './views/FlightsView';

const StyledApp = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 0 1rem;
`;

const HeaderContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 1.5rem 1rem;
`;

const Header = styled.header`
  background-color: #210e71;
  margin-bottom: var(--container-margin);
  border-bottom: 2px solid ${({ theme }) => theme.colors.yellow};
`;

const Title = styled.h1`
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
  margin: 0;
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 0.25rem;
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
            <Title>Amsterdam Schipol Airport</Title>
            <SubTitle>Flight Information</SubTitle>
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
            <Route path="/">
              <FlightsView
                page={page}
                setPage={setPage}
                flightDirection={flightDirection}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                setOverlayIsVisible={setOverlayIsVisible}
              />
            </Route>
          </Switch>
        </StyledApp>
      </>
    </Theme>
  );
};

export { App };
