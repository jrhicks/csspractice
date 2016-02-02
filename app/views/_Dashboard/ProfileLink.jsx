import React from 'react';
import styles from './ProfileLink.scss';

class ProfileLink extends React.Component {

  render() {
    const randomUrl = `http://lorempixel.com/20/20/people?x=${Math.random()}`;

    return (
      <div className={styles.flag}>
        <div className={styles.image}>
          <img src={randomUrl} alt="" />
        </div>
        <div className={styles.body}>
          <p>Foo Bar</p>
        </div>
      </div>
    );
  }
}

module.exports = ProfileLink;
