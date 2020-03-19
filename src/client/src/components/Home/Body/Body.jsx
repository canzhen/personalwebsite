import './Body.css'
import * as React from "react";
import { Link } from "react-router-dom";

type BodyProps = {
  language: string,
}

export class Body extends React.Component<BodyProps> {

  nextPath = (path) => {
    this.props.history.push(path);
  }

  render() {
    return (
        <div className="body">
          <div className="homeLogo" >
            <img src={this.props.language == 'EN' ? '/images/canzhenzhou_google.png' : 
                      this.props.language == 'CN' ? '/images/canzhenzhou_baidu.png' : ''} />
          </div>
          <div className="homeSearchBar">
            <input type="text" 
                   placeholder={this.props.language == 'EN' ? "What do you want to know about Canzhen?" : 
                                this.props.language == 'CN' ? "你想了解关于灿桢的什么呀？" : ""}></input>
          </div>
          <div className="buttonGroup">
            <Link className="btn" to="/search">
              {this.props.language == 'EN' ? "Canzhen Search" : 
               this.props.language == 'CN' ? "灿桢一下，你就知道😁" : ""}
            </Link>
            {this.props.language == 'EN' && (
              <Link className="btn">I am Feeling Lucky</Link>
            )}
          </div>
        </div>
    );
  }
}