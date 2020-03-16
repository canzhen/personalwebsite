import './Header.css'

import * as React from "react";
import { Button } from 'react-bootstrap';

export class Header extends React.Component {
  render() {
    return (
        <header className="homepageHeader">
            <p>Learn More About Me</p>
            <img className="menuButtonImg" src='/images/menubutton.png'/>
            <Button>Login</Button>
        </header>
    );
  }
}