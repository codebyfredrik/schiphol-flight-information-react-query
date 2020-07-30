import { useEffect, useState } from 'react';
import moment from 'moment';

const useGetTime = (timestamp) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    if (timestamp) {
      const temp = moment(timestamp).format('HH:mm');
      setTime(temp);
    }
  }, [timestamp]);

  return time;
};

export { useGetTime };
