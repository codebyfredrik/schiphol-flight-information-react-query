import React from 'react';
import styled from 'styled-components';

const consecutive = (array) => {
  let i = 2,
    d,
    isInSequence;
  while (i < array.length) {
    d = array[i - 1].position - array[i - 2].position;
    console.log(typeof array[i - 1].position);
    if (
      Math.abs(d) === 1 &&
      d === +array[i].position - +array[i - 1].position
    ) {
      console.log('Abs', Math.abs(d));
      isInSequence = true;
    } else {
      isInSequence = false;
    }
    i++;
  }
  return isInSequence;
};

const CheckinDesk = ({ checkinLocations }) => {
  const { checkinAllocations } = checkinLocations;
  const { rows: rows } = checkinAllocations[0];
  let isInSequence = null;

  isInSequence = consecutive(rows.rows);

  console.log(rows.rows);
  console.log(isInSequence);

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
          return <span>{item.position}, </span>;
        } else {
          return <span>{item.position}</span>;
        }
      })}
    </div>
  );
};

export { CheckinDesk };
