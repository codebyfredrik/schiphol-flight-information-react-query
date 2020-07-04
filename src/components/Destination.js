import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import dataFetchConfig from './../config/dataFetchConfig';
import { useQuery } from 'react-query';

const defaultQueryFn = async (key, page = 0) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}${key}`,
    dataFetchConfig
  );
  return data;
};

const Destination = ({ route }) => {
  const { status, data: result, error, isFetching } = useQuery(
    `/destinations/${route.destinations[0]}`,
    defaultQueryFn,
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  return (
    <>
      {isFetching ? (
        'Loading...'
      ) : error ? (
        'Error'
      ) : result ? (
        <span>{result.city}</span>
      ) : (
        'N/A'
      )}
    </>
  );
};

export default Destination;
