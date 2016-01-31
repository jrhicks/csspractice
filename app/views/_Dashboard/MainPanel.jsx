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
            <img className={styles.profile}
              src="http://lorempixel.com/200/250/business/"
            />
          <h1>Jeffrey Hicks</h1>
          <p>@jrhicks</p>
          </div>
          <div className={styles.body}>
            <div className={styles.tile}>
              Tile
            </div>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = MainPanel;
