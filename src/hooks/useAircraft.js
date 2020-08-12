import { useQuery } from 'react-query';
import { query } from './../helpers/query';

const useAircraft = (iataSub) => {
  // console.log(iataSub);
  const { data: result, error, isLoading, isSuccess } = useQuery(
    `/aircrafttypes?iataSub=${iataSub}`,
    query,
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  return { result, error, isLoading, isSuccess };
};

export { useAircraft };
