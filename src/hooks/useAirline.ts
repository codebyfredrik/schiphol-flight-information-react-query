import { useQuery } from 'react-query';
import { query } from '../helpers/query';

interface IAirline {
  result: {
    iata: string;
    icao: string;
    nvls: number;
    publicName: string;
  };
  error: any;
  isLoading: boolean;
  isSuccess: boolean;
}

const useAirline = (prefix: string): IAirline => {
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
