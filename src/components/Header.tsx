import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { ShiftBy } from './ShiftBy'

interface IHeaderProps {
  isSticky: boolean;
}

const fadeIn = keyframes`
  0% {
    transform: translateY(-40px);
  }
  100% {
    transform: translateY(0);
  }
`;

const StyledHeader = styled.header<IHeaderProps>`
  width: 100%;
  background: linear-gradient(to right, #073590, #0d49c0);
  border-bottom: 2px solid ${({ theme }) => theme.colors.yellow};
  height: ${(props) => (props.isSticky ? '40px' : '125px')};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.2),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.05);
  ${(props) =>
    props.isSticky === true &&
    css`
      position: fixed;
      top: 0;
      z-index: 1;
      animation: ${fadeIn} 0.6s cubic-bezier(0.22, 1, 0.36, 1);
      font-weight: normal;
    `};
`;

const Content = styled.div<IHeaderProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: auto;
  padding: ${(props) => (props.isSticky ? '0.6rem 1rem' : '1.5rem 1rem')};
  height: ${(props) => (props.isSticky ? '40px' : '125px')};

  @media screen and (min-width: 380px) {
    flex-direction: ${(props) => (props.isSticky ? 'row' : 'column')};
    justify-content: ${(props) => (props.isSticky ? 'space-between' : '')};
  }
`;

const Title = styled.h1<IHeaderProps>`
  display: inline-block;
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: ${(props) => (props.isSticky ? '1.2rem' : '1.5rem')};
  font-weight: 600;
  line-height: ${(props) => (props.isSticky ? '1rem' : '1.1rem')};
  color: ${({ theme }) => theme.colors.yellow};

  @media screen and (min-width: 520px) {
    font-size: ${(props) => (props.isSticky ? '1.2rem' : '2.5rem')};
    line-height: ${(props) => (props.isSticky ? '0.8rem' : '1.8rem')};
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const SubTitle = styled.h3<IHeaderProps>`
  display: ${(props) => (props.isSticky ? 'none' : 'inline-block')};
  font-size: 1rem;
  line-height: 0.7rem;
  margin-right: ${(props) => (props.isSticky ? '-0.25rem' : '0rem')};
  letter-spacing: 0.25rem;
  font-weight: 600;
  font-family: 'Source Sans Pro', sans-serif;
  color: ${({ theme }) => theme.colors.subTitle};

  @media screen and (min-width: 520px) {
    margin-top: ${(props) => (props.isSticky ? '0rem' : '0.25rem')};
    font-size: ${(props) => (props.isSticky ? '0.75rem' : '1.25rem')};
    line-height: ${(props) => (props.isSticky ? '0.5rem' : '1rem')};
  }

  @media screen and (min-width: 768px) {
    display: ${(props) => (props.isSticky ? 'inline-block' : '')};
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
`;

const Header = ({ isSticky }: IHeaderProps): JSX.Element => {
  return (
    <StyledHeader isSticky={isSticky}>
      <Content isSticky={isSticky}>
        <StyledLink to="/">
          <ShiftBy x={2}><Title isSticky={isSticky}>Amsterdam Schipol Airport</Title></ShiftBy>
        </StyledLink>
        <StyledLink to="/">
          <SubTitle isSticky={isSticky}>Flight Information</SubTitle>
        </StyledLink>
      </Content>
    </StyledHeader>
  );
};

export { Header };
