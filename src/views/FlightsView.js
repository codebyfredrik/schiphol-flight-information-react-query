import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { useFlights, useRenderFlights, useHasMounted } from '../hooks/index';
import { Button, Content, Loading } from '../styles/styles';

const Flights = styled.ul`
  display: grid;
  grid-gap: 1rem;
  padding: 0;
  margin: 2rem 0;
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

const StyledError = styled.span`
  display: inline-block;
  font-weight: bold;
  color: #ff0800;
  margin-top: var(--container-margin);
`;

const FlightsView = ({
  page,
  setPage,
  flightDirection,
  isDarkMode,
  toggleDarkMode,
  setOverlayIsVisible,
  ...restProps
}) => {
  const {
    isError,
    isFetching,
    isLoading,
    isSuccess,
    error,
    resolvedData,
  } = useFlights(page, flightDirection);
  // const hasMounted = useHasMounted();
  const { renderFlights } = useRenderFlights(
    resolvedData,
    isDarkMode,
    isFetching
  );

  // if (!hasMounted) return null;

  return (
    <>
      <Content {...restProps} my="2rem">
        <Helmet>
          <title>Arrival and departure flights</title>
        </Helmet>
        <FlexContainer>
          <Button onClick={toggleDarkMode}>
            {isDarkMode ? 'Light ' : 'Dark '} theme
          </Button>
          <Button onClick={setOverlayIsVisible}>Filter</Button>
          <Spacer />
          <Button
            onClick={() => setPage((prevState) => Math.max(prevState - 1, 0))}
            disabled={page === 0 || isFetching}
          >
            Earlier flights
          </Button>
          <Button
            onClick={() =>
              setPage((prevState) => {
                return isSuccess && page === +resolvedData.lastPage - 1
                  ? prevState
                  : prevState + 1;
              })
            }
            disabled={
              (isSuccess && page === +resolvedData.lastPage - 1) || isFetching
            }
          >
            Later flights
          </Button>
        </FlexContainer>
        {isLoading ? (
          <Loading>Loading flights...</Loading>
        ) : isError ? (
          <StyledError>Error: {error.message}</StyledError>
        ) : isSuccess ? (
          <Flights>{renderFlights()}</Flights>
        ) : null}
      </Content>
    </>
  );
};

export { FlightsView };
