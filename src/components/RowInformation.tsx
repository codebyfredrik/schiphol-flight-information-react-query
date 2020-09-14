import React from 'react';
import styled from 'styled-components';
import { DisplayDate } from './DisplayDate';
import { UpdateIndicator } from './UpdateIndicator';

interface IRowInformationProps {
  date: string;
  isFetching: boolean;
}

const StyledRowInformation = styled.li`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  list-style-type: none;
  font-weight: bold;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color var(--transition-time) ease-in;
  }
`;

const Update = styled(UpdateIndicator)`
  margin-left: 5px;
`;

const RowInformation = ({
  date,
  isFetching,
  ...restProps
}: IRowInformationProps): JSX.Element => {
  return (
    <StyledRowInformation {...restProps}>
      <DisplayDate date={date} />
      {isFetching && <Update />}
    </StyledRowInformation>
  );
};

export { RowInformation };
