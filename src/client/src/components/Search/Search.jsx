import './Search.css'

import * as React from "react";
import { Button } from 'react-bootstrap';

const Search: React.FC<> = () => {
  return (
      <header className="homepageHeader">
          <p>Learn More About Me</p>
          <img className="headerMenuButtonImg" src='/images/menubutton.png' alt='menubutton'/>
          <Button className="headerButton">Contact</Button>
      </header>
  );
}

export default Search;
