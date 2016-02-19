import React from 'react';
import { Link } from 'react-router';
import styles from './HeroPanel.scss'

class HeroPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.panelContainer}>
        <div className={styles.panelContent}>
          <div className={styles.heroMessage}>
            <h1>Panel Title</h1>
            <p>Lorem Ipsum dolor sit amut.  Lorem Ipsum dolor sit amut.  Lorem Ipsum dolor sit amut.</p>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = HeroPanel;
