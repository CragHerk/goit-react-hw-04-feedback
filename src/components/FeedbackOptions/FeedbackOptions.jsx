import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ handleFeedback }) => {
  return (
    <div className={styles.buttonGroup}>
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
    </div>
  );
};

export default FeedbackOptions;
