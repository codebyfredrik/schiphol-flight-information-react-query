import { useQuery } from 'react-query';
import { query } from '../helpers/query';

interface IAircraftType {
  iataMain: string;
  iataSub: string;
  longDescription: string;
  shortDescription: string;
}

interface IAircraft {
  result: {
    aircraftTypes: IAircraftType[];
  };
  error: any;
  isLoading: boolean;
  isSuccess: boolean;
}

const useAircraft = (iataSub: string): IAircraft => {
  const { data: result, error, isLoading, isSuccess } = useQuery(
    `/aircrafttypes?iataSub=${iataSub}`,
    query,
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
  console.log(typeof iataSub);
  console.log(result);
  return { result, error, isLoading, isSuccess };
};

export { useAircraft };
