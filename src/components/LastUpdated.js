import React from 'react';
import { useFormatTime } from './../hooks/index';

const LastUpdated = ({ timestamp }) => {
  const { formattedTimestamp } = useFormatTime(timestamp, 'HH:mm');
  return <span>{`Last updated ${formattedTimestamp}`}</span>;
};

export { LastUpdated };
