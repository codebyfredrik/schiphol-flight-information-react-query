import { useQuery } from 'react-query';
import { query } from './../helpers/query';

const useFlight = (id) => {
  const { data: result, error, isLoading, isSuccess, isFetching } = useQuery(
    `/flights/${id}`,
    query
  );

  return { result, error, isLoading, isSuccess, isFetching };
};

export { useFlight };
