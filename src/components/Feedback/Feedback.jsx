import React, { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import styles from './Feedback.module.css';

const ResponseWidget = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((good / totalFeedback) * 100)
    : 0;

  return (
    <div className={styles.widget}>
      <h2>Response Widget</h2>
      <button className={styles.button} onClick={() => handleFeedback('good')}>
        Good
      </button>
      <button
        className={styles.button}
        onClick={() => handleFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={styles.button} onClick={() => handleFeedback('bad')}>
        Bad
      </button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positivePercentage={positiveFeedbackPercentage}
      />
    </div>
  );
};

export default ResponseWidget;
