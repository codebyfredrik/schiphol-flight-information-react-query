import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

const Destination = ({ route }) => {
  const { status, data: result, error, isFetching } = useQuery(
    `/destinations/${route.destinations[0]}`
  );

  return (
    <>
      {isFetching ? (
        'Loading...'
      ) : error ? (
        'Error'
      ) : result ? (
        <span>{`${result.city}, ${result.country}`}</span>
      ) : (
        'N/A'
      )}
    </>
  );
};

export default Destination;
