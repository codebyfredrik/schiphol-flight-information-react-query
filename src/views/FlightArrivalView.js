import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Heading } from '../styles/Styles';
import { useFlight } from '../hooks/index';

const FlightArrivalView = () => {
  const { direction, date, id } = useParams();
  const { result, error, isSuccess, isLoading } = useFlight(id);

  console.log(result);

  return <Heading>Flight Arrival View</Heading>;
};

export { FlightArrivalView };
