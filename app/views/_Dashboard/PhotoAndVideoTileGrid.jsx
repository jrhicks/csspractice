import React from 'react';
import styles from './PhotoAndVideoTileGrid.scss';

class PhotoAndVideoTileGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.component}>
        <div className={styles.grid}>
          <img className={ styles.tile} src="http://lorempixel.com/100/100/business/" />
          <img className={ styles.tile} src="http://lorempixel.com/100/100/city/" />
          <img className={ styles.tile} src="http://lorempixel.com/100/100/sports/" />
          <img className={ styles.tile} src="http://lorempixel.com/100/100/people/" />
          <img className={ styles.tile} src="http://lorempixel.com/100/100/cats/" />
          <img className={ styles.tile} src="http://lorempixel.com/100/100/technics/" />
        </div>
      </div>
    );
  }

}

module.exports = PhotoAndVideoTileGrid;
