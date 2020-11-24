import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { queryCache } from 'react-query';
import { query } from '../helpers/query';
import { useFlight, useBoop, useHasMounted } from '../hooks/index';
import {
  Content,
  ErrorContent,
  Loading,
  StyledFlightNumber,
  Title,
  FlightInformation,
  Item,
} from '../styles/styles';
import { Redo, ArrowRight } from '../components/icons/index';
import {
  Gate,
  FlightFrom,
  City,
  DateTime,
  DepartureTime,
  FlightStatus,
  CheckinDesk,
  LastUpdated,
  AircraftDetails,
  BoardingDetails,
  ShiftBy,
  Tooltip,
  Error,
} from '../components/index';

const StyledCity = styled(City)`
  display: block;
  font-size: 3.6rem;
  font-weight: 900;
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

const Heading = styled.span`
  display: block;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17em, 1fr));
  grid-gap: 1rem;
  margin: 2rem 0;
`;

const FlightDepartureView = ({ isDarkMode }) => {
  const hasMounted = useHasMounted();
  const { id } = useParams();
  const { result: flight, isLoading, isError, isSuccess, error } = useFlight(
    id
  );
  const [styleArrow, triggerArrow] = useBoop({ x: 5 });
  const [styleRedo, triggerRedo] = useBoop({ rotation: -90 });
  let prefixAirlineCode = '';

  if (flight) {
    prefixAirlineCode = flight.prefixICAO ?? flight.flightName.slice(0, 2);
  }

  if (!hasMounted) return null;

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
              <title>
                Departure information for flight {flight?.flightName}
              </title>
            </Helmet>
          ) : (
            <Helmet>
              <title>Departure information</title>
            </Helmet>
          )}
          <HeaderContainer>
            <Content>
              <HeaderInformation>
                <StyledFlightFrom
                  prefixICAO={prefixAirlineCode}
                  flightName={flight.flightName}
                  direction="to"
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
              <FlightInformation>
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
                  <Heading>Departure time</Heading>
                  {flight ? (
                    <Text>
                      <DepartureTime
                        scheduleDateTime={flight.scheduleDateTime}
                        actualOffBlockTime={flight.actualOffBlockTime}
                      />
                    </Text>
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
                  <Heading>Departures</Heading>
                  {flight?.terminal ? (
                    <Text>{flight.terminal}</Text>
                  ) : (
                    <Text>N/A</Text>
                  )}
                </Item>
                <Item>
                  <Heading>Check-in desk</Heading>
                  {flight?.checkinAllocations ? (
                    <Text>
                      <CheckinDesk
                        checkinLocations={flight.checkinAllocations}
                      />
                    </Text>
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
              </FlightInformation>
            </div>
            <FlightDetails>
              {flight?.expectedTimeBoarding &&
                flight?.expectedTimeGateClosing &&
                flight?.expectedTimeGateOpen && (
                  <BoardingDetails
                    expectedTimeBoarding={flight.expectedTimeBoarding}
                    expectedTimeGateClosing={flight.expectedTimeGateClosing}
                    expectedTimeGateOpen={flight.expectedTimeGateOpen}
                  />
                )}
              {flight?.aircraftType && flight?.aircraftRegistration && (
                <AircraftDetails
                  aircraftRegistration={flight.aircraftRegistration}
                  aircraftType={flight.aircraftType.iataSub}
                />
              )}
            </FlightDetails>
          </Content>
        </>
      ) : null}
    </>
  );
};

export { FlightDepartureView };
