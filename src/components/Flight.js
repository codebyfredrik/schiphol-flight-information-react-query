import React from 'react';
import styled from 'styled-components';
import { Airline } from './Airline';
import { Destination } from './Destination';
import { FlightDirectionTag } from './FlightDirectionTag';
import { Time } from './Time';
import { FlightNumber } from './FlightNumber';

const StyledFlight = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  padding: 1.25rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 90px 3fr;
  grid-template-rows: 1fr;

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

const CodeShare = styled.div`
  border-top: 1px dashed rgba(0, 0, 0, 0.15);
  padding-top: 1rem;
  margin-top: 1rem;
  font-size: 0.875rem;
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
    codeshares,
    aircraftType,
    route,
  } = flight;

  let estimatedTime, actualTime;

  if (estimatedLandingTime) estimatedTime = estimatedLandingTime.slice(11, 19);
  if (actualOffBlockTime) estimatedTime = actualOffBlockTime.slice(11, 19);
  if (actualLandingTime) actualTime = actualLandingTime.slice(11, 19);

  return (
    <StyledFlight>
      <Container>
        <LeftContainer>
          <TimeWrapper>
            {flightDirection === 'A' ? (
              <>
                <ScheduleTime time={scheduleTime} estimated={estimatedTime} />
                {actualLandingTime ? (
                  <ActualArrivalTime time={actualTime} />
                ) : estimatedTime ? (
                  <EstimatedArrivalTime time={estimatedTime} />
                ) : null}
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
          <Destination route={route} />
          <FlightInfo>
            <StyledFlightNumber flightName={flightName} />
            <StyledAirline prefixICAO={prefixICAO} />
          </FlightInfo>
        </MiddleContainer>
        <RightContainer>Text</RightContainer>
      </Container>
      {codeshares?.codeshares && (
        <CodeShare>
          Also known as: {codeshares?.codeshares.join(' / ')}
        </CodeShare>
      )}
      {/* <FlexContainer>
        <span>{aircraftType.iataMain}</span>
      </FlexContainer> */}
      {/* <span>{aircraftType.iataMain}</span> */}
    </StyledFlight>
  );
};

export default Flight;
