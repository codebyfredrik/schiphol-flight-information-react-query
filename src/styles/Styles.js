import styled from 'styled-components';

export const Button = styled.button`
  height: var(--min-tap-target-height);
  border: 0px solid rgba(179, 212, 255, 1);
  padding: 0.4rem 0.7rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bgButton};
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 1px;
  outline: none;
  transition: color var(--transition-time) ease-in,
    background-color var(--transition-time) ease-in;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.bgButtonHover};
      cursor: pointer;
    }
  }
`;
