import { useEffect } from 'react';
import { usePaginatedQuery, queryCache } from 'react-query';
import axios from '../helpers/axios';
import moment from 'moment';

interface IFlightsProps {
  page: number;
  flightDirection: string;
}

interface IFlights {
  isError: boolean;
  isFetching: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  error: any;
  resolvedData: any;
}

const query = async (
  key: string,
  { page = 0, flightDirection = '' }: IFlightsProps
) => {
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

const useFlights = (page: number, flightDirection: string): IFlights => {
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
