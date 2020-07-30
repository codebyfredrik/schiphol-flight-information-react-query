import React, { useState } from 'react';
import styled from 'styled-components';
import { useToggle } from './hooks/useToggle';
import { useDarkMode } from './hooks/useDarkMode';
import { Theme } from './components/Theme';
import { ReactQueryDevtools } from 'react-query-devtools';
import { useFlights } from './hooks/useFlights';
import { GlobalStyle } from './components/GlobalStyle';
import { Button } from './styles/Styles';
import { Flight } from './components/Flight';
import { RowInformation } from './components/RowInformation';
import { Overlay } from './components/Overlay';

const WrapperContainer = styled.div`
  position: relative;
`;

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
  background-color: #0b0e10;
  margin-bottom: var(--container-margin);
  border-bottom: 2px solid ${({ theme }) => theme.colors.yellow};
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  color: ${({ theme }) => theme.colors.yellow};

  @media screen and (min-width: 380px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 520px) {
    font-size: 2.5rem;
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const SubTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-family: 'Source Sans Pro', sans-serif;
  color: ${({ theme }) => theme.colors.subTitle};

  @media screen and (min-width: 520px) {
    font-size: 1.5rem;
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const Flights = styled.ul`
  display: grid;
  grid-gap: 1rem;
  padding: 0;
  margin: var(--container-margin) 0 2rem 0;
`;

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.5rem;

  @media screen and (min-width: 680px) {
    grid-template-columns: 9em 9em auto 9em 9em;
    grid-template-rows: 1fr;
  }
`;

const Spacer = styled.div`
  display: none;

  @media screen and (min-width: 680px) {
    display: inline-block;
  }
`;

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};

  &:disabled {
    cursor: default;
    opacity: 0.5;

    &:hover {
      background-color: ${({ theme }) => theme.colors.bgButton};
    }
  }
`;

const Loading = styled.span`
  display: inline-block;
  margin: var(--container-margin) 0 3rem 0;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const Error = styled.span`
  display: inline-block;
  margin: var(--container-margin) 0 3rem 0;
  font-weight: bold;
  color: #ff0800;
`;

const App = () => {
  const [page, setPage] = useState(0);
  const [flightDirection, setFlightDirection] = useState('');
  const [overlayIsVisible, setOverlayIsVisible] = useToggle();
  const { toggleDarkMode, isDarkMode } = useDarkMode('dark');

  const {
    isError,
    isFetching,
    isLoading,
    isSuccess,
    error,
    resolvedData,
  } = useFlights(page, flightDirection);

  if (resolvedData) {
    /* Logging for troubleshooting */
    // console.log(`Frontend Page Fetched: ${page}`);
    // console.log(`API Last Page: ${resolvedData.lastPage - 1}`);
    // console.log(` `);
  }

  const renderList = () => {
    let currentDate = null;

    const result = resolvedData.data.flights
      .filter((item) => item.flightName === item.mainFlight)
      .map((item) => {
        if (item.scheduleDate !== currentDate) {
          currentDate = item.scheduleDate;
          return (
            <React.Fragment key={item.id}>
              <RowInformation date={item.scheduleDate} />
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
        <WrapperContainer>
          <StyledApp>
            <FlexContainer>
              <StyledButton type="button" onClick={toggleDarkMode}>
                {isDarkMode ? 'Light ' : 'Dark '} theme
              </StyledButton>
              <StyledButton type="button" onClick={setOverlayIsVisible}>
                Filter
              </StyledButton>
              <Spacer />
              <StyledButton
                type="button"
                onClick={() =>
                  setPage((prevState) => Math.max(prevState - 1, 0))
                }
                data-testid="previous-page"
                disabled={page === 0 || isFetching}
              >
                Previous page
              </StyledButton>
              <StyledButton
                type="button"
                onClick={() =>
                  setPage((prevState) => {
                    return isSuccess && page === +resolvedData.lastPage - 1
                      ? prevState
                      : prevState + 1;
                  })
                }
                disabled={
                  (isSuccess && page === +resolvedData.lastPage - 1) ||
                  isFetching
                }
              >
                Next page
              </StyledButton>
            </FlexContainer>
            <div>
              {isLoading ? (
                <Loading>Loading flights...</Loading>
              ) : isError ? (
                <Error>Error: {error.message}</Error>
              ) : (
                <Flights>{renderList()}</Flights>
              )}
            </div>
          </StyledApp>
        </WrapperContainer>
      </>
    </Theme>
  );
};

export { App };
