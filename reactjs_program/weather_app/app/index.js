
import ReactDOM from 'react-dom';

import React, { Component } from 'react';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello, world!
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));

