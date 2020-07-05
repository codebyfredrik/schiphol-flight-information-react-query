import React from 'react';
import styled from 'styled-components';
import { Airline } from './Airline';
import { Destination } from './Destination';
import { FlightDirectionTag } from './FlightDirectionTag';
import Registration from './Registration';
import { Time } from './Time';
import { FlightNumber } from './FlightNumber';

const StyledFlight = styled.li`
  display: grid;
  grid-template-columns: 90px 3fr;
  grid-template-rows: 1fr;
  list-style-type: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  padding: 1.25rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
     {
      grid-template-columns: 130px 3fr 2fr;
    }
  }
`;

const ScheduleTime = styled(Time)`
  font-weight: bold;
  text-decoration: ${(props) => (props.estimated ? 'line-through' : '')};
`;

const EstimatedArrivalTime = styled(Time)`
  font-weight: bold;

  @media screen and (min-width: 768px) {
    margin-left: 0.5rem;
  }
`;

const ActualArrivalTime = styled(Time)`
  font-weight: bold;

  @media screen and (min-width: 768px) {
    margin-left: 0.5rem;
  }
`;

const ActualDepartureTime = styled(Time)`
  font-weight: bold;

  @media screen and (min-width: 768px) {
    margin-left: 0.5rem;
  }
`;

const StyledDestination = styled(Destination)`
  /* margin-bottom: 0.3rem; */
`;

const StyledFlightNumber = styled(FlightNumber)`
  &::after {
    content: ' ';
    white-space: pre;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RightContainer = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
     {
      display: flex;
    }
  }
`;

const FlightInfo = styled.div`
  display: flex;
`;

const StyledAirline = styled(Airline)`
  visibility: hidden;
  @media screen and (min-width: 435px) {
     {
      visibility: visible;
    }
  }
`;

const DirectionWrapper = styled.div`
  display: grid;
  justify-content: flex-start;
  margin-top: 1px;
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Flight = ({ flight }) => {
  const {
    flightDirection,
    scheduleTime,
    estimatedLandingTime,
    actualLandingTime,
    actualOffBlockTime,
    prefixICAO,
    flightName,
    aircraftType,
    aircraftRegistration,
    route,
  } = flight;

  let estimatedTime, actualTime;

  if (estimatedLandingTime) estimatedTime = estimatedLandingTime.slice(11, 19);
  if (actualOffBlockTime) estimatedTime = actualOffBlockTime.slice(11, 19);
  if (actualLandingTime) actualTime = actualLandingTime.slice(11, 19);

  return (
    <StyledFlight>
      <LeftContainer>
        <TimeWrapper>
          {flightDirection === 'A' ? (
            <>
              <ScheduleTime time={scheduleTime} estimated={estimatedTime} />
              {estimatedTime && <EstimatedArrivalTime time={estimatedTime} />}
            </>
          ) : (
            <>
              <ScheduleTime time={scheduleTime} estimated={estimatedTime} />
              {estimatedTime && <ActualDepartureTime time={estimatedTime} />}
            </>
          )}
        </TimeWrapper>
        <DirectionWrapper>
          <FlightDirectionTag flightDirection={flightDirection} />
        </DirectionWrapper>
      </LeftContainer>
      <MiddleContainer>
        <StyledDestination route={route} />
        <FlightInfo>
          <StyledFlightNumber flightName={flightName} />
          <StyledAirline prefixICAO={prefixICAO} />
        </FlightInfo>
      </MiddleContainer>
      <RightContainer>Text</RightContainer>
      {/* <FlexContainer>
        <span>{aircraftType.iataMain}</span>
      </FlexContainer> */}
      {/* <StyledDestination route={route} /> */}

      {/* <StyledFlightInformation>
        <StyledFlightNumber flightName={flightName} />
        <Airline prefixICAO={prefixICAO} />
      </StyledFlightInformation> */}
      {/* <span>{aircraftType.iataMain}</span> */}
      {/* <Registration registration={aircraftRegistration} /> */}
    </StyledFlight>
  );
};

export default Flight;
