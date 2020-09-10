import { useQuery } from 'react-query';
import { query } from '../helpers/query';

export interface IDestination {
  result: {
    city: string;
    country: string;
    iata: string;
    publicname: {
      dutch: string;
      english: string;
    };
  };
  error: Error | null;
  isLoading: boolean;
  isSuccess: boolean;
  isFetching: boolean;
}

interface IDestinationProps {
  destinations: string[];
  eu: string;
  visa: boolean;
}

const useDestination = (route: IDestinationProps): IDestination => {
  const { data: result, error, isLoading, isSuccess, isFetching } = useQuery(
    `/destinations/${route.destinations[0]}`,
    query,
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  return { result, error, isLoading, isSuccess, isFetching };
};

export { useDestination };
