import { useQuery } from 'react-query';
import { query } from './../helpers/query';

const useAirline = (prefix) => {
  const { data: result, error, isLoading, isSuccess } = useQuery(
    `/airlines/${prefix}`,
    query,
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  return { result, error, isLoading, isSuccess };
};

export { useAirline };
