import React from 'react';

const consecutive = (array) => {
  let i = 2,
    d,
    isInSequence = null;
  while (i < array.length) {
    d = array[i - 1].position - array[i - 2].position;
    console.log('d', d);
    if (Math.abs(d) === 1 && d === array[i].position - array[i - 1].position) {
      console.log('Abs', Math.abs(d));
      isInSequence = true;
    } else {
      console.log('isInSequence', isInSequence);
      isInSequence = false;
    }
    i++;
  }
  return { isInSequence };
};

const CheckinDesk = ({ checkinLocations }) => {
  const { checkinAllocations } = checkinLocations;
  const { rows } = checkinAllocations[0];

  const { isInSequence } = consecutive(rows.rows);

  console.log('Rows.rows', rows.rows);
  console.log('isInSequence', isInSequence);

  if (isInSequence) {
    return (
      <span>{`${rows.rows[0].position}-${
        rows.rows[rows.rows.length - 1].position
      }`}</span>
    );
  }

  return (
    <div>
      {rows.rows.map((item, index) => {
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
