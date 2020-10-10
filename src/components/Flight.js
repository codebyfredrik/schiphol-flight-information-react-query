import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { query } from './../helpers/query';
import { queryCache } from 'react-query';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { darken } from 'polished';
import {
  useFlightStatus,
  useFlightDirection,
  useFormatTime,
} from './../hooks/index';
import { Airline } from './Airline';
import { Destination } from './Destination';
import { FlightDirectionTag } from './FlightDirectionTag';
import { Time } from './Time';
import { FlightNumber } from './FlightNumber';
import { Tag } from './Tag';
import { Gate } from './Gate';
import { ScheduleTime } from './../styles/Styles';
import { ArrowRight } from './../components/icons/index';

const StyledFlight = styled(motion.li)`
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

const StyledLink = styled(Link)`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 86px 5fr;
  grid-template-rows: 1fr;

  @media screen and (min-width: 490px) {
    grid-template-columns: 110px 3.6fr 1.4fr;
  }
`;

const EstimatedArrivalTime = styled(Time)`
  @media screen and (min-width: 490px) {
    margin-left: 0.5rem;
  }
`;

const ActualArrivalTime = styled(Time)`
  @media screen and (min-width: 490px) {
    margin-left: 0.5rem;
  }
`;

const ActualDepartureTime = styled(Time)`
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
    flex-direction: row;
    justify-content: space-between;
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
    display: flex;
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
  font-weight: 900;

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
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  background-color: ${(props) =>
    props.isDarkMode
      ? darken(0.1, props.backgroundColor)
      : props.backgroundColor};
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

const StyledArrowRight = styled(ArrowRight)`
  margin-left: 5px;
`;

const LinkWrapper = styled.div`
  text-align: right;
  display: inline-block;
  flex: 1 1 1rem;
  color: #0d49c0;
`;

const LinkText = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const Flight = ({ flight, isDarkMode }) => {
  const {
    id,
    flightDirection,
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
  let text = useFlightDirection(flightDirection);
  const { formattedTimestamp } = useFormatTime(scheduleDateTime, 'YYYYMMDD');
  let estimatedTime = null,
    actualTime = null;
  // const onMouseEnter = () => console.log('hej');
  if (estimatedLandingTime) estimatedTime = estimatedLandingTime;
  if (actualOffBlockTime) estimatedTime = actualOffBlockTime;
  if (actualLandingTime) actualTime = actualLandingTime;

  return (
    <StyledLink
      to={`/${text.toLowerCase()}s/${formattedTimestamp}/flights/${id}`}
    >
      <StyledFlight
        onMouseEnter={() => {
          queryCache.prefetchQuery(`/flights/${id}`, query);
        }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            // y: 5,
          },
          visible: {
            opacity: 1,
            // y: 0,
            transition: {
              delay: 0.1,
            },
          },
        }}
      >
        <Container>
          <LeftContainer>
            <TimeWrapper>
              {flightDirection === 'A' ? (
                <>
                  <ScheduleTime
                    time={scheduleDateTime}
                    estimated={estimatedTime}
                  />
                  {actualLandingTime ? (
                    <ActualArrivalTime time={actualTime} />
                  ) : estimatedTime ? (
                    <EstimatedArrivalTime time={estimatedTime} />
                  ) : null}
                </>
              ) : (
                <>
                  <ScheduleTime
                    time={scheduleDateTime}
                    estimated={estimatedTime}
                  />
                  {estimatedTime && (
                    <ActualDepartureTime time={estimatedTime} />
                  )}
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
              {flightStatus.map((item) => (
                <FlightStatus
                  key={item.statusCode}
                  label={item.status}
                  backgroundColor={item.backgroundColor}
                  isDarkMode={isDarkMode}
                />
              ))}
            </FlightStatusWrapper>
          </MiddleContainer>
          <RightContainer>
            {gate && <Gate gate={gate} />}
            <LinkWrapper>
              <LinkText>Details</LinkText>
              <StyledArrowRight
                height={12}
                width={12}
                fillColor="#0d49c0"
                aria-label="Display flight details"
              />
            </LinkWrapper>
          </RightContainer>
        </Container>
        {codeshares?.codeshares && (
          <CodeShare>
            Also known as: {codeshares?.codeshares.join(' / ')}
          </CodeShare>
        )}
      </StyledFlight>
    </StyledLink>
  );
};

Flight.propTypes = {
  flight: PropTypes.object,
};

export { Flight, FlightStatus };
