// import { useEffect, useState } from 'react';
import moment from 'moment';

const useGetTime = (timestamp) => {
  let time = null;

  if (timestamp) {
    time = moment(timestamp).format('HH:mm');
  }

  return time;
};

export { useGetTime };
