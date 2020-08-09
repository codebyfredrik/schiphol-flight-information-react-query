import styled from 'styled-components';
import { Time } from './../components/Time';

export const Button = styled.button`
  height: var(--min-tap-target-height);
  box-shadow: 0 1px 1px ${({ theme }) => theme.colors.borderShadow};
  padding: 0.4rem 0.7rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bgButton};
  -webkit-tap-highlight-color: transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 1px;
  outline: none;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in,
      background-color var(--transition-time) ease-in;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.bgButtonHover};
      cursor: pointer;
    }
  }
`;

export const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.pageHeading};
  text-transform: uppercase;
`;

export const ScheduleTime = styled(Time)`
  font-weight: bold;
  text-decoration: ${(props) => (props.estimated ? 'line-through' : null)};
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 0 1rem;
`;

export const ContentHeader = styled.div`
  background-color: white;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
