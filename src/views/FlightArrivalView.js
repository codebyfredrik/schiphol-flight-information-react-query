import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { useFlight } from '../hooks/index';
import { Gate } from './../components/index';
import { FlightFrom } from './../components/FlightFrom';
import { City } from './../components/City';
import { FlightNumber } from './../components/FlightNumber';
import { DateTime } from '../components/DateTime';
import { ArrivalTime } from './../components/ArrivalTime';
import { FlightStatus } from './../components/FlightStatus';
import { Content } from './../styles/Styles';
import { LastUpdated } from './../components/LastUpdated';
import { queryCache } from 'react-query';
import { query } from './../helpers/query';
import { Redo, LinkSolid } from './../components/icons/index';

const StyledCity = styled(City)`
  display: block;
  font-size: 3.6rem;
  font-weight: 900;
  color: #210e71;
  background: linear-gradient(to bottom, #0d49c0, #073590);
  background-size: cover;
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

const FlexItem = styled.div`
  display: inline-block;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.borderDashed};
  padding-bottom: 1rem;

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
  font-weight: 600;
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
  font-weight: 900;
`;

const ArrivalItem = styled.span`
  color: ${({ theme }) => theme.colors.text};
  display: block;
  font-size: 1.125rem;
  font-weight: 900;
`;

const StyledDateTime = styled(DateTime)`
  display: block;
  font-size: 1.125rem;
  font-weight: 900;
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
  color: ${({ theme }) => theme.colors.text};
`;

const ContentHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.contentHeading};
  padding: 2rem 0;
  box-shadow: 0 1px 1px ${({ theme }) => theme.colors.borderShadowDarkBg};
`;

const FlexContainer = styled.div`
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

const StyledLinkSolid = styled(LinkSolid)`
  margin-right: 5px;
`;

const FlightArrivalView = ({ isDarkMode, toggleDarkMode }) => {
  const { id } = useParams();
  const { result: flight, isLoading } = useFlight(id);

  return (
    <>
      {isLoading ? (
        <Content>
          <Loading>Loading...</Loading>
        </Content>
      ) : (
        <>
          <ContentHeader>
            <Content>
              <FlexContainer>
                {flight?.prefixICAO && flight?.flightName && (
                  <StyledFlightFrom
                    prefixICAO={flight.prefixICAO}
                    flightName={flight.flightName}
                    direction="from"
                  />
                )}
                <StyledLink to="/">
                  <StyledLinkSolid height={12} width={12} fillColor="#0d49c0" />
                  <span>All flights</span>
                </StyledLink>
              </FlexContainer>
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
          </ContentHeader>
          <Content>
            <div>
              <Title>Flight information</Title>
              <FlightInformationArrival>
                <FlexItem>
                  <Heading>Date</Heading>
                  {flight?.scheduleDateTime && (
                    <StyledDateTime
                      date={flight.scheduleDateTime}
                      format="MMM D"
                    />
                  )}
                </FlexItem>
                <FlexItem>
                  <Heading>Arrival time</Heading>
                  {flight && (
                    <ArrivalTime
                      scheduleDateTime={flight.scheduleDateTime}
                      estimatedLandingTime={flight.estimatedLandingTime}
                      actualLandingTime={flight.actualLandingTime}
                    />
                  )}
                </FlexItem>
                <FlexItem>
                  <Heading>Flight number</Heading>
                  {flight?.flightName && (
                    <StyledFlightNumber flightName={flight.flightName} />
                  )}
                </FlexItem>
                <FlexItem>
                  <Heading>Gate</Heading>
                  {flight?.gate ? (
                    <Gate gate={flight.gate} />
                  ) : (
                    <ArrivalItem>N/A</ArrivalItem>
                  )}
                </FlexItem>
                <FlexItem>
                  <Heading>Pier</Heading>
                  {flight?.pier ? (
                    <ArrivalItem>{flight?.pier}</ArrivalItem>
                  ) : (
                    <ArrivalItem>N/A</ArrivalItem>
                  )}
                </FlexItem>
                <FlexItem>
                  <Heading>Arrivals</Heading>
                  {flight?.terminal ? (
                    <ArrivalItem>{flight.terminal}</ArrivalItem>
                  ) : (
                    <ArrivalItem>N/A</ArrivalItem>
                  )}
                </FlexItem>
                <FlexItem>
                  <Heading>Baggage belt</Heading>
                  {flight?.baggageClaim?.belts.length > 0 ? (
                    <ArrivalItem>{flight.baggageClaim.belts[0]}</ArrivalItem>
                  ) : (
                    <ArrivalItem>N/A</ArrivalItem>
                  )}
                </FlexItem>
                <FlexItem>
                  <Heading>Schengen</Heading>
                  {flight?.route.eu === 'S' ? (
                    <ArrivalItem>Yes</ArrivalItem>
                  ) : flight?.route.eu !== 'S' ? (
                    <ArrivalItem>No</ArrivalItem>
                  ) : (
                    <ArrivalItem>N/A</ArrivalItem>
                  )}
                </FlexItem>
              </FlightInformationArrival>
            </div>
          </Content>
        </>
      )}
    </>
  );
};

export { FlightArrivalView };
