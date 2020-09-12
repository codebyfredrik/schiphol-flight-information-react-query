import { useQuery } from 'react-query';
import { query } from '../helpers/query';

interface IFlight {
  result: {
    actualLandingTime: string | null;
    actualOffBlockTime: string | null;
    aircraftRegistration: string | null;
    aircraftType: {
      iataMain: string | null;
      iataSub: string | null;
    };
    airlineCode: number;
    checkinLocations: any;
    codeshares: string | null;
    estimatedLandingTime: string | null;
    expectedSecurityFilter: any;
    expectedTimeBoarding: string | null;
    expectedTimeClosing: string | null;
    expectedTimeGateOpen: string | null;
    expectedTimeOnBelt: string | null;
    flightDirection: string;
    flightName: string;
    flightNumber: number;
    gate: string | null;
    id: string;
    isOperationalFlight: boolean;
    lastUpdatedAt: string | null;
    mainFlight: string;
    pier: string | null;
    prefixIATA: string | null;
    prefixICAO: string | null;
    publicEstimatedOffBlockTime: string | null;
    publicFlightState: {
      flightStates: string[] | null;
    };
    route: {
      destinations: string[] | null;
      eu: string | null;
      visa: boolean | null;
    };
    scheduleDate: string | null;
    scheduleDateTime: string | null;
    scheduleTime: string | null;
    serviceType: string | null;
    terminal: number | null;
    transferPositions: any;
  };
  error: Error | null;
  isLoading: boolean;
  isSuccess: boolean;
  isFetching: boolean;
}

const useFlight = (id: string): IFlight => {
  const { data: result, error, isLoading, isSuccess, isFetching } = useQuery(
    `/flights/${id}`,
    query
  );
  console.log(result);
  return { result, error, isLoading, isSuccess, isFetching };
};

export { useFlight };
