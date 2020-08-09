import { useQuery } from 'react-query';
import { query } from './../helpers/query';

const useDestination = (route) => {
  const { data: result, error, isLoading, isSuccess, isFetching } = useQuery(
    `/destinations/${route.destinations[0]}`,
    query,
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  return { result, error, isLoading, isSuccess };
};

export { useDestination };
