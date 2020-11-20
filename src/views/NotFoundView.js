import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Content } from '../styles/styles';

const StyledNotFoundView = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const StyledContent = styled(Content)`
  height: 100%;
  margin-top: 10rem;
`;

const NotFoundView = () => {
  const location = useLocation();
  return (
    <StyledContent>
      <StyledNotFoundView>
        <div>
          Sorry...no match for <code>{location.pathname}</code>.{' '}
          <Link to="/">Go home.</Link>
        </div>
      </StyledNotFoundView>
    </StyledContent>
  );
};

export { NotFoundView };
