import React from 'react';
import { Link } from 'react-router';
import styles from './TabPanel.scss'

class TabPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.panelContainer}>
        <div className={styles.panelContent}>
          <a href="" className={styles.tab}>Tab 1</a>
          <a href="" className={styles.tab}>Tab 2</a>
          <a href="" className={styles.tab}>Tab 3</a>
          <a href="" className={styles.tab}>Tab 4</a>
          <a href="" className={styles.tab}>Tab 5</a>
        </div>
      </div>
    );
  }

}

module.exports = TabPanel;
