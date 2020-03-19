import './Footer.css'

import * as React from "react";
import { Link } from "react-router-dom";


type FooterProps = {
  language: string,
}

export class Footer extends React.Component<FooterProps> {
  render() {
    return (
        <div className="footer">
          <div className="fbar">
              <p>
                {this.props.language == 'EN' ? '@Copyright: Canzhen Zhou since 2020.' : 
                 this.props.language == 'CN' ? '©2020 Canzhen' : '' }
              </p>
              <Link className="fbarRight" to={this.props.language == 'EN' ? '/cn' : this.props.language == 'CN' ? '/' : ''}>
                {this.props.language == 'EN' ? '中文' : 
                this.props.language == 'CN' ? 'English' : ''}
              </Link>
          </div>
        </div>
    );
  }
}