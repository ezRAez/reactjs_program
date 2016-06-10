import React, { Component } from 'react';
import GetCityContainer from './GetCityContainer';

let styles = {
  container: {
    width: '100%',
    height: '92%'
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        <h1>Main.js header</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Main;
