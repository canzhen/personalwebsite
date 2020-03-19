import './Header.css'

import * as React from "react";
import { Button } from 'react-bootstrap';

type HeaderProps = {
  language: string,
}
export class Header extends React.Component<HeaderProps> {
  render() {
    return (
        <header className="homepageHeader">
            <p>
              {this.props.language == 'EN' ? 'Learn More About Me':
               this.props.language == 'CN' ? '了解更多': ''}
            </p>
            <img className="headerMenuButtonImg" src='/images/menubutton.png'/>
            <Button className="headerButton" variant="primary">
              {this.props.language == 'EN' ? 'Contact': 
               this.props.language == 'CN' ? '联系我' : ''}
            </Button>
        </header>
    );
  }
}