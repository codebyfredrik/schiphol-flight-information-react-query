import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background: linear-gradient(to right, #073590, #0d49c0);
  border-bottom: 2px solid ${({ theme }) => theme.colors.yellow};
`;

const Content = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 1.5rem 1rem;
`;

const Title = styled.h1`
  display: inline-block;
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  color: ${({ theme }) => theme.colors.yellow};

  @media screen and (min-width: 380px) {
    font-size: 2rem;
    line-height: 2rem;
  }

  @media screen and (min-width: 520px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const SubTitle = styled.h3`
  display: inline-block;
  margin: 0;
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 0.25rem;
  letter-spacing: 0.25rem;
  font-family: 'Source Sans Pro', sans-serif;
  color: ${({ theme }) => theme.colors.subTitle};

  @media screen and (min-width: 520px) {
    font-size: 1.25rem;
    line-height: 1.25rem;
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Content>
        <div>
          <StyledLink to="/">
            <Title>Amsterdam Schipol Airport</Title>
          </StyledLink>
        </div>
        <StyledLink to="/">
          <SubTitle>Flight Information</SubTitle>
        </StyledLink>
      </Content>
    </StyledHeader>
  );
};

export { Header };