import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { useFlight } from '../hooks/index';
import { Gate } from './../components/Gate';
import { FlightFrom } from './../components/FlightFrom';
import { City } from './../components/City';
import { FlightNumber } from './../components/FlightNumber';
import { DateTime } from '../components/DateTime';
import { DepartureTime } from './../components/DepartureTime';
import { FlightStatus } from './../components/FlightStatus';
import { Content } from './../styles/Styles';
import { CheckinDesk } from './../components/CheckinDesk';
import { LastUpdated } from './../components/LastUpdated';
import { queryCache } from 'react-query';
import { query } from './../helpers/query';
import { Redo, ArrowRight } from './../components/icons/index';
import { AircraftDetails } from './../components/AircraftDetails';
import { BoardingDetails } from './../components/BoardingDetails';

const StyledCity = styled(City)`
  display: block;
  font-size: 3.6rem;
  font-weight: 900;
  color: #210e71;
  background: linear-gradient(to bottom, #0d49c0, #073590);
  background-size: cover
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
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

const StyledRedo = styled(Redo)`
  margin-right: 5px;
`;

const StyledArrowRight = styled(ArrowRight)`
  margin-left: 5px;
`;

const FlightDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17em, 1fr));
  grid-gap: 1rem;
  margin: 2rem 0;
`;

const FlightDepartureView = ({ isDarkMode, toggleDarkMode }) => {
  const { id } = useParams();
  const { result: flight, isLoading } = useFlight(id);
  // console.log(flight);
  // console.log(flight.checkinAllocations);
  return (
    <>
      {isLoading ? (
        <Content>
          <Loading>Loading...</Loading>
        </Content>
      ) : (
        <>
          <HeaderContainer>
            <Content>
              <HeaderInformation>
                {flight?.prefixICAO && flight?.flightName ? (
                  <StyledFlightFrom
                    prefixICAO={flight.prefixICAO}
                    flightName={flight.flightName}
                    direction="to"
                  />
                ) : (
                  <span>Error</span>
                )}
                <StyledLink to="/">
                  <span>All flights</span>
                  <StyledArrowRight
                    height={12}
                    width={12}
                    fillColor="#0d49c0"
                  />
                </StyledLink>
              </HeaderInformation>
              {flight?.route && <StyledCity route={flight.route} />}
              {flight?.publicFlightState && flight?.flightDirection && (
                <StyledFlightStatus
                  publicFlightState={flight.publicFlightState}
                  flightDirection={flight.flightDirection}
                  isDarkMode={isDarkMode}
                />
              )}
              <WrapperLastUpdated>
                {flight?.lastUpdatedAt && (
                  <StyledButton
                    onClick={() => {
                      queryCache.prefetchQuery(`/flights/${id}`, query);
                    }}
                  >
                    <StyledRedo height={12} width={12} fillColor="#0d49c0" />
                    <LastUpdated timestamp={flight.lastUpdatedAt} />
                  </StyledButton>
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
              </FlightInformationArrival>
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
      )}
    </>
  );
};

export { FlightDepartureView };
