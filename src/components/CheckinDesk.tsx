import React from 'react';

type CheckinDesk = {
  desks: any;
  position: string;
};

type CheckIn = {
  endTime: string;
  rows: {
    rows: CheckinDesk[];
  };
  startTime: string;
};

interface ICheckinDesk {
  checkinLocations: {
    checkinAllocations: CheckIn[];
    remark: any;
  };
}

const consecutive = (array: any) => {
  let i = 2;
  let d = null;
  let isInSequence = null;

  while (i < array.length) {
    d = array[i - 1].position - array[i - 2].position;
    if (Math.abs(d) === 1 && d === array[i].position - array[i - 1].position) {
      isInSequence = true;
    } else {
      isInSequence = false;
    }
    i++;
  }
  return { isInSequence };
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const CheckinDesk = ({ checkinLocations }: ICheckinDesk): JSX.Element => {
  const { checkinAllocations } = checkinLocations;
  const { rows } = checkinAllocations[0];

  const { isInSequence } = consecutive(rows.rows);

  if (isInSequence) {
    return (
      <span>{`${rows.rows[0].position}-${
        rows.rows[rows.rows.length - 1].position
      }`}</span>
    );
  }

  return (
    <div>
      {rows.rows.map((item: CheckinDesk, index: number) => {
        if (index < rows.rows.length - 1) {
          return <span key={item.position}>{item.position}, </span>;
        } else {
          return <span key={item.position}>{item.position}</span>;
        }
      })}
    </div>
  );
};

export { CheckinDesk };
