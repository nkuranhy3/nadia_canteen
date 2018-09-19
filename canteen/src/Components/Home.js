import React, { Component } from 'react';
import '../App.css';
import Slider from './Slider'
import Welcome from './Welcome'

class Home extends Component {
  render() {
    return (
      <div>
       <Slider />
       <Welcome  />
      </div>
    );
  }
}

export default Home;
