import React from 'react';
import { Link } from 'react-router';
import loremIpsum from 'lorem-ipsum';
import styles from './MainPanel.scss'
import PhotoAndVideoTileGrid from './PhotoAndVideoTileGrid';
import Tweet from './Tweet';

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
            <img src="http://lorempixel.com/280/250/business/" style={{width: '100%', marginTop: '-150px'}} />
            <p>{loremIpsum({count: 1, units: 'sentences'})}</p>
            <PhotoAndVideoTileGrid />
          </div>

          <div className={styles.body}>
            <div className={styles.tile}>
              <div className={styles.tweetCollection}>
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
              </div>
            </div>
          </div>

          <div className={styles.col3}>
            <div className={styles.tile}>
              <div>{loremIpsum({ count: 1, units: 'sentences' })}</div>
            </div>
            <div className={styles.tile}>
              <div>{loremIpsum({ count: 1, units: 'sentences' })}</div>
            </div>
            <div className={styles.tile}>
              <div>{loremIpsum({ count: 1, units: 'sentences' })}</div>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

module.exports = MainPanel;
