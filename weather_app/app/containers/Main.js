import React, { Component } from 'react';
import GetCityContainer from './GetCityContainer';

let styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, .89)',
    color: '#fff',
    padding: 5
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={{margin: 0, paddingTop: 8}}>Weather App</h2>
          <GetCityContainer direction='row' />
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Main;
