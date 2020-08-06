import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useFlight } from '../hooks/index';
import { Gate } from './../components/index';
import { FlightFrom } from './../components/FlightFrom';
import { City } from './../components/City';
import { FlightNumber } from './../components/FlightNumber';
import { DateTime } from '../components/DateTime';
import { ArrivalTime } from './../components/ArrivalTime';

const StyledCity = styled(City)`
  display: inline-block;
  font-size: 3.6rem;
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 2px;
  font-weight: 900;
  color: #210e71;
  background: ${({ theme }) => theme.colors.yellow};
  box-shadow: 0 1px 1px ${({ theme }) => theme.colors.borderShadow};
`;

const FlightInformationArrival = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const FlexItem = styled.div`
  display: inline-block;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.borderDashed};
  padding-bottom: 1rem;

  @media screen and (min-width: 768px) {
    border-bottom: 0;
    border-right: 1px dashed ${({ theme }) => theme.colors.borderDashed};
    padding-bottom: 0rem;

    &:nth-last-of-type(1) {
      border-right: 0;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 1.5rem 0 1.5rem 0;
`;

const Heading = styled.span`
  display: block;
  font-size: 0.875rem;
  margin-bottom: 1rem;
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

const FlightArrivalView = () => {
  const { id } = useParams();
  const { result: flight } = useFlight(id);

  console.log(flight);

  return (
    <>
      {flight?.prefixICAO && flight?.flightName && (
        <FlightFrom
          prefixICAO={flight.prefixICAO}
          flightName={flight.flightName}
        />
      )}
      {flight?.route && <StyledCity route={flight.route} />}
      <div>
        <Title>Flight information</Title>
        <FlightInformationArrival>
          <FlexItem>
            <Heading>Date</Heading>
            {flight?.scheduleDateTime && (
              <StyledDateTime date={flight.scheduleDateTime} format="MMM D" />
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
            {flight?.gate && <Gate gate={flight.gate} />}
          </FlexItem>
          <FlexItem>
            <Heading>Terminal</Heading>
            {flight?.terminal && <ArrivalItem>{flight.terminal}</ArrivalItem>}
          </FlexItem>
          <FlexItem>
            <Heading>Baggage belt</Heading>
            {flight?.baggageClaim?.belts.length > 0 && (
              <ArrivalItem>{flight.baggageClaim.belts[0]}</ArrivalItem>
            )}
          </FlexItem>
        </FlightInformationArrival>
      </div>
    </>
  );
};

export { FlightArrivalView };
