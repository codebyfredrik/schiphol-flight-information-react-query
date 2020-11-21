import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Emoji } from '../styles/styles';

const Message = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};
  line-height: 0.8;
`;

const StyledError = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Error = ({ message = 'no match', url = '/' }) => {
  return (
    <StyledError>
      <Emoji mr={10} role="img" aria-label="screaming in fear">
        😱
      </Emoji>
      <Message>
        Oh no...{message}. Display <Link to={url}>all flights.</Link>
      </Message>
    </StyledError>
  );
};

export { Error };
