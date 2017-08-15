import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component {
  render() {
    return(
        <h1>ReactJS with Webpack and ES6</h1>
    );
  }
}

render(<App />, document.getElementById('application'));
