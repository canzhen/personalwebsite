import './Body.css'

import * as React from "react";
import { Link } from "react-router-dom";

type BodyProps = {
  language: string,
}

const Body: React.FC<BodyProps> = props => {
  return (
      <div className="body">
        <div className="homeLogo" >
          <img src={props.language === 'EN' ? '/images/canzhenzhou_google.png' : 
                    props.language === 'CN' ? '/images/canzhenzhou_baidu.png' : ''} alt='homepagelogo'/>
        </div>
        <div className="homeSearchBar">
          <input type="text" 
                  placeholder={props.language === 'EN' ? "What do you want to know about Canzhen?" : 
                              props.language === 'CN' ? "你想了解关于灿桢的什么呀？" : ""}></input>
        </div>
        <div className="buttonGroup">
          <Link className="btn" to="/search">
            {props.language === 'EN' ? "Canzhen Search" : 
              props.language === 'CN' ? "灿桢一下，你就知道😁" : ""}
          </Link>
          {props.language === 'EN' && (
            <Link className="btn" to="/iamfeelinglucky">I am Feeling Lucky</Link>
          )}
        </div>
      </div>
  );
}

export default Body;
