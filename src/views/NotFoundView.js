import { Error } from '../components/Error';
import { ErrorContent } from '../styles/styles';

const NotFoundView = () => {
  return (
    <ErrorContent>
      <Error />
    </ErrorContent>
  );
};

export { NotFoundView };
