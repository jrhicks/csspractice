import React from 'react';
import { Link } from 'react-router';
import style from './Dashboard.scss'
import HeroPanel from './HeroPanel';
import TabPanel from './TabPanel';
import MainPanel from './MainPanel';
import SubtabPanel from './SubtabPanel';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.panelCollection}>
        <TabPanel />
        <HeroPanel />
        <SubtabPanel />
        <MainPanel />
      </div>
    );
  }

}

module.exports = App;
