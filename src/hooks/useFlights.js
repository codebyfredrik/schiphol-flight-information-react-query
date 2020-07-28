import { useEffect } from 'react';
import { usePaginatedQuery, queryCache } from 'react-query';
import axios from './../helpers/axios';
import moment from 'moment';

const query = async (key, { page = 0, flightDirection = '' }) => {
  const dateTimeString = moment().format('YYYY-MM-DDTHH:mm:ss');
  let url;

  if (flightDirection) {
    url = `/${key}?flightDirection=${flightDirection}&fromDateTime=${dateTimeString}&page=${page}&searchDateTimeField=scheduleDateTime&sort=+scheduleDate,+scheduleTime`;
  } else {
    url = `/${key}?fromDateTime=${dateTimeString}&page=${page}&searchDateTimeField=scheduleDateTime&sort=+scheduleDate,+scheduleTime`;
  }
  const { data } = await axios.get(url);
  return data;
};

const useFlights = (page, flightDirection) => {
  const {
    isError,
    isFetching,
    isLoading,
    isSuccess,
    error,
    resolvedData,
  } = usePaginatedQuery(['flights', { page, flightDirection }], query, {});

  useEffect(() => {
    if (
      !isFetching &&
      !isLoading &&
      !error &&
      isSuccess &&
      resolvedData &&
      page + 1 < resolvedData.lastPage - 1
    ) {
      queryCache.prefetchQuery(
        ['flights', { page: page + 1, flightDirection }],
        query
      );
      /* Logging for troubleshooting */
      // console.log(`Cache Page Fetched: ${page + 1}`);
    }
  }, [
    resolvedData,
    isSuccess,
    page,
    isFetching,
    isLoading,
    error,
    flightDirection,
  ]);

  return { isError, isFetching, isLoading, isSuccess, error, resolvedData };
};

export { useFlights };
