import styled from 'styled-components';
import { Time, ITimeProps } from '../components/Time';

const Button = styled.button`
  height: var(--min-tap-target-height);
  box-shadow: 0 1px 1px ${({ theme }) => theme.colors.borderShadow};
  padding: 0.4rem 0.7rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bgButton};
  -webkit-tap-highlight-color: transparent;
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 1px;
  outline: none;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in,
      background-color var(--transition-time) ease-in,
      box-shadow var(--transition-time) ease-in;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.bgButtonHover};
      cursor: pointer;
    }
  }
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.pageHeading};
  text-transform: uppercase;
`;

const ScheduleTime = styled(Time)<ITimeProps>`
  text-decoration: ${(props) => (props.estimated ? 'line-through' : null)};
  font-weight: ${(props) => (props.estimated ? 'normal' : null)};
`;

const Content = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 0 1rem;
`;

const ContentHeader = styled.div`
  background-color: white;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 1.25rem;
  border-radius: 4px;
  box-shadow: 0 1px 1px ${({ theme }) => theme.colors.borderShadow};
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
  display: inline-block;
  font-size: 1.125rem;
`;

const HeadingDetails = styled.h3`
  color: ${({ theme }) => theme.colors.text};
`;

const SubHeading = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0 0.5rem 0;
  font-weight: 600;
`;

export {
  ContentHeader,
  Content,
  ScheduleTime,
  Heading,
  Button,
  Box,
  Text,
  HeadingDetails,
  SubHeading,
};