import React, { Component } from 'react';
import home from '../img/homeIcon.png';

class BackToHome extends Component {
    render() {
      return ( 
        <div className="Back">
           <a href="link" target="_blank"> 
           <img src={home} className="home" alt="homeIcon"/>
           </a>
        </div>
      );
    }
  }

  export default BackToHome;