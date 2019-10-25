import React, { Component } from 'react';
import circle from '../img/circled-right-2.png';

class Start extends Component {
    render() {
      return ( 
        <div className="Start">
          <h2> Start browsing </h2>
      <img src={circle} className="circle" alt="circle-right" />
      </div>
      );
    }
  }

  export default Start;