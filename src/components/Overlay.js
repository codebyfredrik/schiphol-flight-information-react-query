import React from 'react';
import styled, { css } from 'styled-components';
import { Times } from './icons/Times';

const StyledOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 1);
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 82vh;

  p:nth-child(3) {
    margin-bottom: 0;
  }
`;

const Option = styled.p`
  text-align: center;
  position: relative;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 2rem;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  font-family: 'Source Sans Pro', sans-serif;
  ${(props) =>
    props.active === true &&
    css`
      background-color: #ffd700;
      color: #000000;
      padding: 0.5rem;
    `}
  transition: color 150ms ease-in;

  &:hover {
    ${(props) =>
      props.active === false &&
      css`
        color: #ffd700;
      `}
    cursor: pointer;
  }
`;

const Close = styled(Times)`
  position: absolute;
  right: 2rem;
  top: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Overlay = ({
  setFlightDirection,
  setOverlayIsVisible,
  setPage,
  flightDirection,
}) => {
  return (
    <StyledOverlay>
      <Close
        height={22}
        width={22}
        fillColor="#ffffff"
        onClick={() => setOverlayIsVisible(false)}
      />
      <Content>
        <Option
          onClick={() => {
            setFlightDirection('');
            setPage(0);
            setOverlayIsVisible(false);
          }}
          active={flightDirection === ''}
        >
          Arrival and departures
        </Option>
        <Option
          onClick={() => {
            setFlightDirection('A');
            setPage(0);
            setOverlayIsVisible(false);
          }}
          active={flightDirection === 'A'}
        >
          Only arrivals
        </Option>
        <Option
          onClick={() => {
            setFlightDirection('D');
            setPage(0);
            setOverlayIsVisible(false);
          }}
          active={flightDirection === 'D'}
        >
          Only departures
        </Option>
      </Content>
    </StyledOverlay>
  );
};
