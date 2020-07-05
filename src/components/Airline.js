import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import dataFetchConfig from './../config/dataFetchConfig';
import NoData from './NoData';

const defaultQueryFn = async (key) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}${key}`,
    dataFetchConfig
  );
  return data;
};

const Airline = ({ prefixICAO }) => {
  const { status, data: result, error, isFetching } = useQuery(
    `/airlines/${prefixICAO}`,
    defaultQueryFn,
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  return (
    <div>
      {isFetching ? (
        'Loading...'
      ) : error ? (
        'Error'
      ) : result ? (
        <span>{result.publicName}</span>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Airline;
