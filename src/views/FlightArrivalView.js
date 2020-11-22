import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { queryCache } from 'react-query';
import { query } from '../helpers/query';
import { useFlight, useBoop, useHasMounted } from '../hooks/index';
import { Content, ErrorContent } from '../styles/styles';
import { Redo, ArrowRight } from '../components/icons/index';
import {
  Gate,
  FlightFrom,
  City,
  FlightNumber,
  DateTime,
  ArrivalTime,
  FlightStatus,
  LastUpdated,
  AircraftDetails,
  ShiftBy,
  Tooltip,
  Error,
} from '../components/index';

const StyledCity = styled(City)`
  display: block;
  font-size: 3.6rem;
  font-weight: 600;
  font-family: 'Source Sans Pro', sans-serif;
  color: #210e71;
  background: linear-gradient(to bottom, #0d49c0, #073590);
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

const StyledArrivalTime = styled(ArrivalTime)`
  font-weight: 500;
`;

const FlightInformationArrival = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media screen and (min-width: 1080px) {
    grid-template-columns: repeat(7, minmax(100px, 1fr));
    grid-template-rows: auto;
  }
`;

const Item = styled.div`
  display: inline-block;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.borderDashed};
  padding-bottom: 1rem;

  &:nth-last-of-type(2),
  &:nth-last-of-type(1) {
    border-bottom: 0;
    padding-bottom: 0;
  }

  @media screen and (min-width: 1080px) {
    border-bottom: 0;
    border-right: 1px dashed ${({ theme }) => theme.colors.borderDashed};
    padding-bottom: 0rem;

    &:nth-last-of-type(2),
    &:nth-last-of-type(1) {
      border-right: 0;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin: 1.5rem 0 1.5rem 0;
  color: ${({ theme }) => theme.colors.text};
`;

const Heading = styled.span`
  display: block;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledFlightNumber = styled(FlightNumber)`
  display: block;
  font-size: 1.125rem;
  font-weight: 500;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
  display: block;
  font-size: 1.125rem;
  font-weight: 500;
`;

const StyledDateTime = styled(DateTime)`
  display: block;
  font-size: 1.125rem;
  font-weight: 500;
`;

const StyledFlightStatus = styled(FlightStatus)`
  margin-top: 1rem;
  font-size: 16px;
  height: 22px;
  line-height: 22px;
  color: ${(props) => (props.isDarkMode ? '#B0B3B8' : 'white')};
`;

const StyledFlightFrom = styled(FlightFrom)`
  flex: 1 1 1rem;
  margin-bottom: 1rem;
`;

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.contentHeading};
  padding: 2rem 0;
  box-shadow: 0 1px 1px ${({ theme }) => theme.colors.borderShadowDarkBg};
`;

const HeaderInformation = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  -webkit-tap-highlight-color: transparent;
  font-size: 1rem;
  text-align: right;
  flex: 1 1 1rem;
  margin-bottom: 1rem;
  display: inline-block;
  text-decoration: none;
  color: #0d49c0;
  cursor: pointer;
`;

const WrapperLastUpdated = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
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

const StyledButton = styled.button`
  border: none;
  outline: none;
  background: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

const FlightDetails = styled.div`
  margin: 2rem 0;
`;

const FlightArrivalView = ({ isDarkMode }) => {
  const hasMounted = useHasMounted();
  const { id } = useParams();
  const { result: flight, isError, isLoading, isSuccess, error } = useFlight(
    id
  );
  const [styleArrow, triggerArrow] = useBoop({ x: 5 });
  const [styleRedo, triggerRedo] = useBoop({ rotation: -90 });
  let prefixAirlineCode = '';

  if (flight) {
    prefixAirlineCode = flight.prefixICAO ?? flight.flightName.slice(0, 2);
  }

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <Content>
          <Loading>Loading flight...</Loading>
        </Content>
      ) : isError ? (
        <ErrorContent>
          <Error message={error.message.toLowerCase()} />
        </ErrorContent>
      ) : isSuccess ? (
        <>
          {flight?.flightName ? (
            <Helmet>
              <title>Arrival information for flight {flight?.flightName}</title>
            </Helmet>
          ) : (
            <Helmet>
              <title>Arrival information</title>
            </Helmet>
          )}
          <HeaderContainer>
            <Content>
              <HeaderInformation>
                <StyledFlightFrom
                  prefixICAO={prefixAirlineCode}
                  flightName={flight.flightName}
                  direction="from"
                />
                <div>
                  <Tooltip title="💡 Click to display all flights">
                    <StyledLink to="/" onMouseEnter={triggerArrow}>
                      <span>All flights</span>
                      <ArrowRight
                        ml="5px"
                        height={12}
                        width={12}
                        fillColor="#0d49c0"
                        style={styleArrow}
                        aria-label="Display all flights"
                      />
                    </StyledLink>
                  </Tooltip>
                </div>
              </HeaderInformation>
              {flight?.route && <StyledCity route={flight.route} />}
              {flight?.publicFlightState && flight?.flightDirection && (
                <ShiftBy x={1}>
                  <StyledFlightStatus
                    publicFlightState={flight.publicFlightState}
                    flightDirection={flight.flightDirection}
                    isDarkMode={isDarkMode}
                  />
                </ShiftBy>
              )}
              <WrapperLastUpdated>
                {flight?.lastUpdatedAt && (
                  <Tooltip
                    title="💡 Click to update flight details"
                    position="top"
                  >
                    <StyledButton
                      onClick={() => {
                        queryCache.prefetchQuery(`/flights/${id}`, query);
                        triggerRedo();
                      }}
                      onMouseEnter={triggerRedo}
                    >
                      <Redo
                        mr="5px"
                        height={12}
                        width={12}
                        fillColor="#0d49c0"
                        style={styleRedo}
                      />
                      <LastUpdated timestamp={flight.lastUpdatedAt} />
                    </StyledButton>
                  </Tooltip>
                )}
              </WrapperLastUpdated>
            </Content>
          </HeaderContainer>
          <Content>
            <div>
              <Title>Flight information</Title>
              <FlightInformationArrival>
                <Item>
                  <Heading>Date</Heading>
                  {flight?.scheduleDateTime ? (
                    <StyledDateTime
                      date={flight.scheduleDateTime}
                      format="MMM D"
                    />
                  ) : (
                    <Text>N/A</Text>
                  )}
                </Item>
                <Item>
                  <Heading>Arrival time</Heading>
                  {flight ? (
                    <StyledArrivalTime
                      scheduleDateTime={flight.scheduleDateTime}
                      estimatedLandingTime={flight.estimatedLandingTime}
                      actualLandingTime={flight.actualLandingTime}
                    />
                  ) : (
                    <Text>N/A</Text>
                  )}
                </Item>
                <Item>
                  <Heading>Flight number</Heading>
                  {flight?.flightName ? (
                    <StyledFlightNumber flightName={flight.flightName} />
                  ) : (
                    <Text>N/A</Text>
                  )}
                </Item>
                <Item>
                  <Heading>Gate</Heading>
                  {flight?.gate ? (
                    <Gate gate={flight.gate} />
                  ) : (
                    <Text>N/A</Text>
                  )}
                </Item>
                <Item>
                  <Heading>Pier</Heading>
                  {flight?.pier ? (
                    <Text>{flight?.pier}</Text>
                  ) : (
                    <Text>N/A</Text>
                  )}
                </Item>
                <Item>
                  <Heading>Arrivals</Heading>
                  {flight?.terminal ? (
                    <Text>{flight.terminal}</Text>
                  ) : (
                    <Text>N/A</Text>
                  )}
                </Item>
                <Item>
                  <Heading>Baggage belt</Heading>
                  {flight?.baggageClaim?.belts.length > 0 ? (
                    <Text>{flight.baggageClaim.belts[0]}</Text>
                  ) : (
                    <Text>N/A</Text>
                  )}
                </Item>
                <Item>
                  <Heading>Schengen</Heading>
                  {flight?.route.eu === 'S' ? (
                    <Text>Yes</Text>
                  ) : flight?.route.eu !== 'S' ? (
                    <Text>No</Text>
                  ) : (
                    <Text>N/A</Text>
                  )}
                </Item>
              </FlightInformationArrival>
            </div>
            {flight?.aircraftType && flight?.aircraftRegistration && (
              <FlightDetails>
                <AircraftDetails
                  aircraftRegistration={flight.aircraftRegistration}
                  aircraftType={flight.aircraftType.iataSub}
                />
              </FlightDetails>
            )}
          </Content>
        </>
      ) : null}
    </>
  );
};

export { FlightArrivalView };
