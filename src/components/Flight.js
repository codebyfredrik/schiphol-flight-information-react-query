import React from 'react';
import styled from 'styled-components';
import { departureStatus } from './../data/departureStatus';
import { arrivalStatus } from './../data/arrivalStatus';
import { Airline } from './Airline';
import { Destination } from './Destination';
import { FlightDirectionTag } from './FlightDirectionTag';
import { Time } from './Time';
import { FlightNumber } from './FlightNumber';
import { Tag } from './Tag';
import { Gate } from './Gate';

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
  grid-template-columns: 90px 5fr;
  grid-template-rows: 1fr;

  @media screen and (min-width: 490px) {
     {
      grid-template-columns: 110px 3.6fr 1.4fr;
    }
  }

  @media screen and (min-width: 768px) {
     {
      grid-template-columns: 110px 3.6fr 1.4fr;
    }
  }
`;

const ScheduleTime = styled(Time)`
  font-weight: bold;
  text-decoration: ${(props) => (props.estimated ? 'line-through' : null)};
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

const FlightID = styled(FlightNumber)`
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
  border-left: 1px dashed rgba(0, 0, 0, 0.15);
  padding-left: 1rem;

  @media screen and (min-width: 768px) {
     {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

const RightContainer = styled.div`
  display: none;
  justify-content: flex-end;
  border-left: 1px dashed rgba(0, 0, 0, 0.15);
  padding-left: 1rem;

  @media screen and (min-width: 490px) {
     {
      display: flex;
    }
  }
`;

const FlightInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const FlightStatus = styled(Tag)`
  margin-right: 0.5rem;
  background-color: ${(props) => props.backgroundColor};
`;

const FlightStatusWrapper = styled.div`
  flex: 1 1 0px;

  @media screen and (min-width: 768px) {
    border-left: 1px dashed rgba(0, 0, 0, 0.15);
    padding-left: 1rem;
  }
`;

const FlightWrapper = styled.div`
  flex: 1 1 0px;
`;

const Flight = ({ flight }) => {
  const {
    flightDirection,
    scheduleTime,
    estimatedLandingTime,
    actualLandingTime,
    actualOffBlockTime,
    publicFlightState,
    prefixICAO,
    flightName,
    codeshares,
    route,
    gate,
  } = flight;

  let estimatedTime, actualTime;

  if (estimatedLandingTime) estimatedTime = estimatedLandingTime.slice(11, 19);
  if (actualOffBlockTime) estimatedTime = actualOffBlockTime.slice(11, 19);
  if (actualLandingTime) actualTime = actualLandingTime.slice(11, 19);
  // if (publicFlightState) console.log(publicFlightState.flightStates);

  const excludedArrivalStatus = new Set(['EXP', 'FIR', 'SCH']);
  const excludedDepartureStatus = new Set(['SCH']);
  let publicState = new Set(publicFlightState.flightStates);
  let tempArray = [];
  let statusResults = [];

  if (flightDirection === 'A') {
    tempArray = new Set(
      [...publicState].filter((x) => !excludedArrivalStatus.has(x))
    );
    Array.from(tempArray).map((item) => {
      return arrivalStatus.map((status) => {
        if (status.statusCode === item) {
          statusResults.push(status);
        }
      });
    });
  } else {
    tempArray = new Set(
      [...publicState].filter((x) => !excludedDepartureStatus.has(x))
    );
    Array.from(tempArray).map((item) => {
      return departureStatus.map((status) => {
        if (status.statusCode === item) {
          statusResults.push(status);
        }
      });
    });
  }

  // console.log('FlightName: ', flightName, statusResults);

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
          <FlightWrapper>
            <Destination route={route} />
            <FlightInfoWrapper>
              <FlightID flightName={flightName} />
              <Airline prefixICAO={prefixICAO} />
            </FlightInfoWrapper>
          </FlightWrapper>
          <FlightStatusWrapper>
            {statusResults.slice(0, 1).map((item) => (
              <FlightStatus
                key={item.statusCode}
                label={item.status}
                backgroundColor={item.backgroundColor}
              />
            ))}
          </FlightStatusWrapper>
        </MiddleContainer>
        <RightContainer>{gate && <Gate gate={gate} />}</RightContainer>
      </Container>
      {codeshares?.codeshares && (
        <CodeShare>
          Also known as: {codeshares?.codeshares.join(' / ')}
        </CodeShare>
      )}
    </StyledFlight>
  );
};

export default Flight;
