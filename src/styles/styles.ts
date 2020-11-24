import styled from 'styled-components';
import { space } from 'styled-system'
import { Time, ITimeProps } from '../components/Time';
import { FlightNumber } from '../components/FlightNumber'

const Button = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
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

  &:disabled {
    cursor: default;
    opacity: 0.5;

    /* &:hover {
      background-color: ${({ theme }) => theme.colors.bgButton};
    } */
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in,
      background-color var(--transition-time) ease-in,
      box-shadow var(--transition-time) ease-in;
  }

  @media (hover: hover) and (pointer: fine) {
    &:enabled:hover {
      background-color: ${({ theme }) => theme.colors.bgButtonHover};
      cursor: pointer;
    }
  }
`;

const Loading = styled.span`
  display: inline-block;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-top: var(--container-margin);

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const Emoji = styled.span`
  ${space}
`

const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.pageHeading};
  text-transform: uppercase;
`;

const ScheduleTime = styled(Time)<ITimeProps>`
  text-decoration: ${(props) => (props.estimated ? 'line-through' : null)};
  font-weight: ${(props) => (props.estimated ? 'normal' : null)};
`;

const Content = styled.div`
  border: 1px solid transparent;
  max-width: 1000px;
  margin: auto;
  padding: 0 1rem;
  ${space};
`;

const StyledFlightNumber = styled(FlightNumber)`
  display: block;
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin: 1.5rem 0;
  color: ${({ theme }) => theme.colors.text};
`;

const ErrorContent = styled(Content)`
  height: 100%;
  margin-top: var(--container-margin);
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

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.body};
  z-index: -1;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: background-color var(--transition-time) ease-in;
  }
`;

const FlightInformation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media screen and (min-width: 1080px) {
    grid-template-columns: repeat(7, minmax(100px, 1fr));
    grid-template-rows: auto;
  }
`;

const Item = styled.div`
  display: inline-block;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.borderDashed};
  padding-bottom: 1rem;

  &:nth-last-of-type(2),
  &:nth-last-of-type(1) {
    border-bottom: 0;
    padding-bottom: 0;
  }

  @media screen and (min-width: 1080px) {
    border-bottom: 0;
    border-right: 1px dashed ${({ theme }) => theme.colors.borderDashed};
    padding-bottom: 0rem;

    &:nth-last-of-type(2),
    &:nth-last-of-type(1) {
      border-right: 0;
    }
  }
`;

export {
  Background,
  ContentHeader,
  Content,
  ErrorContent,
  ScheduleTime,
  Heading,
  Button,
  Box,
  Text,
  HeadingDetails,
  SubHeading,
  Emoji,
  Loading,
  StyledFlightNumber,
  Title,
  FlightInformation,
  Item
};
