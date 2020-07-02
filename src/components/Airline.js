import React from 'react';
import { useQuery } from 'react-query';

const Airline = ({ prefixICAO }) => {
  const { status, data: result, error, isFetching } = useQuery(
    `/airlines/${prefixICAO}`
  );

  return (
    <>
      {isFetching ? (
        'Loading...'
      ) : error ? (
        'Error'
      ) : result ? (
        <span>{result.publicName}</span>
      ) : (
        'N/A'
      )}
    </>
  );
};

export default Airline;
