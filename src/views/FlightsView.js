import React from 'react';
import styled from 'styled-components';
import { useFlights, useRenderFlights } from '../hooks/index';
import { Button } from './../styles/Styles';
import { Content } from './../styles/Styles';

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
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-top: var(--container-margin);

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const Error = styled.span`
  display: inline-block;
  font-weight: bold;
  color: #ff0800;
  margin-top: var(--container-margin);
`;

const StyledContent = styled(Content)`
  margin-top: 2rem;
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
  const { renderFlights } = useRenderFlights(
    resolvedData,
    isDarkMode,
    isFetching
  );

  if (resolvedData) {
    /* Logging for troubleshooting */
    // console.log(`Frontend Page Fetched: ${page}`);
    // console.log(`API Last Page: ${resolvedData.lastPage - 1}`);
    // console.log(` `);
  }

  return (
    <>
      <StyledContent {...restProps}>
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
            onClick={() => setPage((prevState) => Math.max(prevState - 1, 0))}
            data-testid="previous-page"
            disabled={page === 0 || isFetching}
          >
            Earlier flights
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
              (isSuccess && page === +resolvedData.lastPage - 1) || isFetching
            }
          >
            Later flights
          </StyledButton>
        </FlexContainer>
        {isLoading ? (
          <Loading>Loading flights...</Loading>
        ) : isError ? (
          <Error>Error: {error.message}</Error>
        ) : (
          <Flights>{renderFlights()}</Flights>
        )}
      </StyledContent>
    </>
  );
};

export { FlightsView };
