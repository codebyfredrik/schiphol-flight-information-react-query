import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import PropTypes from 'prop-types';
import { useFlightStatus } from './../hooks/useFlightStatus';
import { Airline } from './Airline';
import { Destination } from './Destination';
import { FlightDirectionTag } from './FlightDirectionTag';
import { Time } from './Time';
import { FlightNumber } from './FlightNumber';
import { Tag } from './Tag';
import { Gate } from './Gate';
import { useGetTime } from './../hooks/useGetTime';

const StyledFlight = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 2px;
  padding: 1.25rem;
  box-shadow: 0 1px 1px ${({ theme }) => theme.colors.borderShadow};

  @media screen and (prefers-reduced-motion: no-preference) {
    transition-property: background-color, box-shadow;
    transition-duration: var(--transition-time);
    transition-timing-function: ease-in;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 86px 5fr;
  grid-template-rows: 1fr;

  @media screen and (min-width: 490px) {
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

  @media screen and (min-width: 490px) {
    margin-left: 0.5rem;
  }
`;

const ActualArrivalTime = styled(Time)`
  font-weight: bold;

  @media screen and (min-width: 490px) {
    margin-left: 0.5rem;
  }
`;

const ActualDepartureTime = styled(Time)`
  font-weight: bold;

  @media screen and (min-width: 490px) {
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
  border-left: 1px dashed ${({ theme }) => theme.colors.borderDashed};
  padding-left: 1rem;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: border-left var(--transition-time) ease-in;
  }

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
  border-left: 1px dashed ${({ theme }) => theme.colors.borderDashed};
  padding-left: 1rem;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: border-left var(--transition-time) ease-in;
  }

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

const FlightDirectionWrapper = styled.div`
  display: grid;
  justify-content: flex-start;
  margin-top: 1px;
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 490px) {
    flex-direction: row;
  }
`;

const CodeShare = styled.div`
  border-top: 1px dashed ${({ theme }) => theme.colors.borderDashed};
  padding-top: 1rem;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (prefers-reduced-motion: no-preference) {
    transition-property: border-top, color;
    transition-duration: var(--transition-time);
    transition-timing-function: ease-in;
  }
`;

const FlightStatus = styled(Tag)`
  flex: 1 1 1rem;
  margin-right: 0.5rem;
  background-color: ${(props) =>
    props.isDarkMode
      ? darken(0.1, props.backgroundColor)
      : props.backgroundColor};
  color: ${({ theme }) => theme.colors.textTag};

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const FlightStatusWrapper = styled.div`
  flex: 1 1 1rem;

  @media screen and (min-width: 768px) {
    border-left: 1px dashed ${({ theme }) => theme.colors.borderDashed};
    padding-left: 1rem;

    @media screen and (prefers-reduced-motion: no-preference) {
      transition: border-left var(--transition-time) ease-in;
    }
  }
`;

const FlightWrapper = styled.div`
  flex: 1 1 0px;
`;

const Flight = ({ flight, isDarkMode }) => {
  const {
    flightDirection,
    scheduleTime,
    scheduleDateTime,
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
  const { flightStatus } = useFlightStatus(publicFlightState, flightDirection);
  let estimatedTime, actualTime;
  console.log(flight);
  // console.log(scheduleDateTime);
  // const time = useGetTime(scheduleDateTime);
  // console.log('Converted time: ', time);

  if (estimatedLandingTime) estimatedTime = estimatedLandingTime.slice(11, 19);
  if (actualOffBlockTime) estimatedTime = actualOffBlockTime.slice(11, 19);
  if (actualLandingTime) actualTime = actualLandingTime.slice(11, 19);

  // if (estimatedLandingTime) estimatedTime = estimatedLandingTime;
  // if (actualOffBlockTime) estimatedTime = actualOffBlockTime;
  // if (actualLandingTime) actualTime = actualLandingTime;

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
          <FlightDirectionWrapper>
            <FlightDirectionTag flightDirection={flightDirection} />
          </FlightDirectionWrapper>
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
            {flightStatus &&
              flightStatus
                .slice(0, 1)
                .map((item) => (
                  <FlightStatus
                    key={item.statusCode}
                    label={item.status}
                    backgroundColor={item.backgroundColor}
                    isDarkMode={isDarkMode}
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

Flight.propTypes = {
  flight: PropTypes.object,
};

export { Flight };
