import './Search.css'

import * as React from "react";
import { Button } from 'react-bootstrap';

export class Search extends React.Component {
  render() {
    return (
        <header className="homepageHeader">
            <p>Learn More About Me</p>
            <img className="headerMenuButtonImg" src='/images/menubutton.png'/>
            <Button className="headerButton">Contact</Button>
        </header>
    );
  }
}
