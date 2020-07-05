import styled from 'styled-components';

export const Button = styled.button`
  height: 2rem;
  border: 0px solid rgba(179, 212, 255, 1);
  padding: 0.4rem 0.7rem;
  color: rgba(0, 98, 224, 1);
  background: rgba(0, 98, 224, 0.06);
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 1px;
  outline: none;
  transition: all 150ms ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: rgba(0, 98, 224, 0.18);
      cursor: pointer;
    }
  }
`;
