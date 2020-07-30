// import { useEffect, useState } from 'react';
import moment from 'moment';

const useFormatTime = (rawTimestamp, format) => {
  let formattedTimestamp = null,
    momentTimestamp = null;

  if (rawTimestamp) {
    momentTimestamp = moment(rawTimestamp);
    formattedTimestamp = momentTimestamp.format(format);
  }

  return { rawTimestamp, momentTimestamp, formattedTimestamp };
};

export { useFormatTime };
