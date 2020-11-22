import React from 'react'
import { Tooltip as ToolTip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

interface ITooltipProps {
  title: string;
  position: any;
  children: React.ReactNode;
}

const Tooltip = ({ title, position = 'bottom', children, ...delegated }: ITooltipProps ): JSX.Element => {
  return (
  <ToolTip title={title} theme="light" position={position} arrow={true} animation="scale" inertia={true} {...delegated}>    
    {children}
  </ToolTip>);
};

export { Tooltip };
