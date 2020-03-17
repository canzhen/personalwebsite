import './Body.css'
import * as React from "react";
import { Link } from "react-router-dom";

export class Body extends React.Component {

  nextPath = (path) => {
    this.props.history.push(path);
  }

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
            <Link className="btn" to="/search">Canzhen Search</Link>
            <Link className="btn">I am Feeling Lucky</Link>
          </div>
        </div>
    );
  }
}