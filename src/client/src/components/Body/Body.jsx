import './Body.css'

import * as React from "react";
export class Body extends React.Component {
  render() {
    return (
        <div className="body">
          <div className="homeLogo" >
            <img src='/images/canzhenzhou.png'/>
          </div>
          <div className="homeSearchBar">
            <input type="text" placeholder="What do you want to know about Canzhen?"></input>
          </div>
          <div className="buttonGroup">
            <button type="button" class="btn btn-light">Canzhen Search</button>
            <button type="button" class="btn btn-light">I am Feeling Lucky</button>
          </div>
        </div>
    );
  }
}