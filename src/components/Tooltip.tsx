import React from 'react'
import { Tooltip as ToolTip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

interface ITooltipProps {
  children: React.ReactNode;
}

const Tooltip = ({ children, ...restProps }: ITooltipProps ): JSX.Element => {
  return <ToolTip {...restProps} style={{color: 'red'}}>{children}</ToolTip>;
};

export { Tooltip };
