import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { useLockBodyScroll, useKeyPress } from './../hooks/index';
import { Times } from './icons/index';

const Animation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const StyledOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  /* background-color: #210e71; */
  background: linear-gradient(45deg, #073590, #0d49c0);
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 1;

  @media screen and (prefers-reduced-motion: no-preference) {
    animation-name: ${Animation};
    animation-duration: 100ms;
    animation-timing-function: cubic-bezier(0, 0.52, 0, 1);
  }
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

const Option = styled.button`
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  border: none;
  outline: none;
  text-align: center;
  position: relative;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.subTitle};
  text-decoration: none;
  font-family: 'Source Sans Pro', sans-serif;
  ${(props) =>
    props.active === true &&
    css`
      background-color: ${({ theme }) => theme.colors.yellow};
      box-shadow: 0 1px 1px ${({ theme }) => theme.colors.borderShadow};
      border-radius: 4px;
      /* color: #210e71; */
      color: #073590;
      padding: 1rem;
    `}

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color 150ms ease-in;
  }

  &:hover {
    ${(props) =>
      props.active === false &&
      css`
        color: ${({ theme }) => theme.colors.yellow};
      `}
    cursor: pointer;
  }
`;

const Close = styled(Times)`
  position: absolute;
  right: 2rem;
  top: 2rem;
`;

const Overlay = ({
  setFlightDirection,
  setOverlayIsVisible,
  setPage,
  overlayIsVisible,
  flightDirection,
}) => {
  useLockBodyScroll();
  useKeyPress('Escape', () => {
    setOverlayIsVisible();
  });

  return (
    <StyledOverlay open={overlayIsVisible}>
      <Close
        height={22}
        width={22}
        fillColor="#ffffff"
        onClick={setOverlayIsVisible}
        aria-label="Close"
      />
      <Content>
        <Option
          type="button"
          onClick={(e) => {
            setFlightDirection('');
            setPage(0);
            setOverlayIsVisible();
            e.stopPropagation();
          }}
          active={flightDirection === ''}
        >
          Arrivals and departures
        </Option>
        <Option
          type="button"
          onClick={(e) => {
            setFlightDirection('A');
            setPage(0);
            setOverlayIsVisible();
            e.stopPropagation();
          }}
          active={flightDirection === 'A'}
        >
          Arrivals
        </Option>
        <Option
          type="button"
          onClick={(e) => {
            setFlightDirection('D');
            setPage(0);
            setOverlayIsVisible();
            e.stopPropagation();
          }}
          active={flightDirection === 'D'}
        >
          Departures
        </Option>
      </Content>
    </StyledOverlay>
  );
};

Overlay.propTypes = {
  setFlightDirection: PropTypes.func,
  setOverlayIsVisible: PropTypes.func,
  setPage: PropTypes.func,
  overlayIsVisible: PropTypes.bool,
  flightDirection: PropTypes.string,
};

export { Overlay };
