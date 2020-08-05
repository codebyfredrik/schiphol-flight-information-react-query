import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useFlight } from '../hooks/index';
import { Gate } from './../components/index';
import { FlightFrom } from './../components/FlightFrom';
import { City } from './../components/City';
import { FlightNumber } from './../components/FlightNumber';
import { DateTime } from '../components/DateTime';

const StyledCity = styled(City)`
  display: block;
  font-size: 3.6rem;
  margin: 0;
  padding: 0;
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
  margin: 1rem 0 1.5rem 0;
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

const BaggageBelt = styled(ArrivalItem)``;

const Terminal = styled(ArrivalItem)``;

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
      {flight && (
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
            {flight && (
              <StyledDateTime date={flight.scheduleDateTime} format="MMM D" />
            )}
          </FlexItem>
          <FlexItem>
            <Heading>Arrival time</Heading>
          </FlexItem>
          <FlexItem>
            <Heading>Flight number</Heading>
            {flight && <StyledFlightNumber flightName={flight.flightName} />}
          </FlexItem>
          <FlexItem>
            <Heading>Gate</Heading>
            {flight && <Gate gate={flight.gate} />}
          </FlexItem>
          <FlexItem>
            <Heading>Terminal</Heading>
            {flight && <Terminal>{flight.terminal}</Terminal>}
          </FlexItem>
          <FlexItem>
            <Heading>Baggage belt</Heading>
            {flight && (
              <BaggageBelt>{flight.baggageClaim.belts[0]}</BaggageBelt>
            )}
          </FlexItem>
        </FlightInformationArrival>
      </div>
    </>
  );
};

export { FlightArrivalView };
