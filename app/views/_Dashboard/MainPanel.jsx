import React from 'react';
import { Link } from 'react-router';
import styles from './MainPanel.scss'

class MainPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.panelContainer}>
        <div className={styles.panelContent}>
          <div className={styles.sidebar}>
            Sidebar
          </div>
          <div className={styles.body}>
            Body
          </div>
        </div>
      </div>
    );
  }

}

module.exports = MainPanel;
