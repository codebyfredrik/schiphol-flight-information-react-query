import { Link } from 'react-router-dom';

const Error = ({ message = 'no match', url = '/' }) => {
  return (
    <div>
      <p>
        <span role="img" aria-label="screaming in fear">
          😱
        </span>
        Oh no...{message}. Display <Link to={url}>all flights.</Link>
      </p>
    </div>
  );
};

export { Error };
