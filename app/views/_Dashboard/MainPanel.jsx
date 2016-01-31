import React from 'react';
import { Link } from 'react-router';
import styles from './MainPanel.scss'
import PhotoAndVideoTileGrid from './PhotoAndVideoTileGrid';

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
            <img src="http://lorempixel.com/280/250/business/" style={{width: '100%', marginTop: '-140px'}} />
            <p>Lorem Ipsum Dolar Sit Amut.  Lorem Ipsum Dolar Sit Amut.  Lorem Ipsum Dolar Sit Amut.  Lorem Ipsum Dolar Sit Amut.</p>
            <PhotoAndVideoTileGrid />
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
