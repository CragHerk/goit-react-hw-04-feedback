import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <React.Fragment>
      {total === 0 ? (
        <p>There is no feedback</p>
      ) : (
        <React.Fragment>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total feedback: {total}</p>
          <p>Positive feedback percentage: {positivePercentage}%</p>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Statistics;
