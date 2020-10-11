import moment from 'moment';

interface IFormatTime {
  rawTimestamp: string;
  momentTimestamp: moment.Moment | null;
  formattedTimestamp: string | null;
}

const useFormatTime = (rawTimestamp: string, format: string): IFormatTime => {
  let formattedTimestamp = null;
  let momentTimestamp = null;

  if (rawTimestamp) {
    momentTimestamp = moment(rawTimestamp);
    formattedTimestamp = momentTimestamp.format(format);
  }

  return { rawTimestamp, momentTimestamp, formattedTimestamp };
};

export { useFormatTime };
