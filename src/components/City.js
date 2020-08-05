import { useDestination } from '../hooks/useDestination';

const City = ({ route }) => {
  const { result } = useDestination(route);

  if (result) {
    return result.city;
  }

  return null;
};

export { City };
