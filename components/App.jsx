import React, { Component } from 'react';

import Component1 from './Component1';
import '../styles/components/App.scss';

export default class App extends Component {
  render () {
    return (
      <div className="appdiv">
        <Component1/>
      </div>
    );
  }
}
