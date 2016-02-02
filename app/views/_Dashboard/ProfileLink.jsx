import React from 'react';
import styles from './ProfileLink.scss';

class ProfileLink extends React.Component {

  render() {
    const img = <i className="material-icons" style={{ fontSize: '1em' }}>face</i>;

    // const randomUrl = `http://lorempixel.com/20/20/people?x=${Math.random()}`;
    // const img = <img src={randomUrl} />;

    return (
      <div className={styles.flag}>
        <div className={styles.image}>
          {img}
        </div>
        <div className={styles.body}>
          Foo Bar
        </div>
      </div>
    );
  }
}

module.exports = ProfileLink;
