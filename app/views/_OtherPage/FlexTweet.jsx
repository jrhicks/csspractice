import React from 'react';
import styles from './Tweet.scss';
import loremIpsum from 'lorem-ipsum';

class Tweet extends React.Component {

  render() {
    const randomUrl = `http://lorempixel.com/100/100/people?x=${Math.random()}`;

    return (
      <div className={styles.media}>
        <img className={styles.figure} src={randomUrl} alt="" />
        <div className={styles.body}>
          <div className={styles.title}>
            Media Object Title
          </div>
          <div className={styles.description}>
            {loremIpsum({ count: 3, units: 'sentences' })}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Tweet;
