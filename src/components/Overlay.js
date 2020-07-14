import React from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  /* align-items: flex-start; */
  background-color: rgba(0, 0, 0, 1);
  /* margin-top: -2rem; */
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
  /* border: 1px solid red; */

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
  transition: color 150ms ease-in;

  &:hover {
    color: #ffd700;
    cursor: pointer;
  }
`;

const Close = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  transition: color 150ms ease-in;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export const Overlay = ({
  setFlightDirection,
  setOverlayIsVisible,
  setPage,
}) => {
  return (
    <StyledOverlay>
      <Close onClick={() => setOverlayIsVisible(false)}>X</Close>
      <Content>
        <Option
          onClick={() => {
            setFlightDirection('');
            setPage(0);
            setOverlayIsVisible(false);
          }}
        >
          Arrival and departures
        </Option>
        <Option
          onClick={() => {
            setFlightDirection('A');
            setPage(0);
            setOverlayIsVisible(false);
          }}
        >
          Only arrivals
        </Option>
        <Option
          onClick={() => {
            setFlightDirection('D');
            setPage(0);
            setOverlayIsVisible(false);
          }}
        >
          Only departures
        </Option>
      </Content>
    </StyledOverlay>
  );
};
