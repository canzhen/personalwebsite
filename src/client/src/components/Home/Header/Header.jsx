import './Header.css'

import * as React from "react";
import classNames from 'classnames';

import { Button } from 'react-bootstrap';


type HeaderProps = {
  language: string;
  isHomePage: boolean;
}

const Header: React.FC<HeaderProps> = props => {
  return (
      <div className={classNames("headerRoot", {
        ["headerRootSpaceBetween"]: !props.isHomePage,
      })}>
        {!props.isHomePage && (
          <div className="headerLeft">
            <img src={props.language === 'EN' ? '/images/canzhenzhou_google.png' : 
                      props.language === 'CN' ? '/images/canzhenzhou_baidu.png' : ''} alt='homepagelogo'/>
          </div>
        )}
        <div className="headerRight">
          <p className="headerLearMore">
              {props.language === 'EN' ? 'Learn More About Me':
              props.language === 'CN' ? '了解更多': ''}
            </p>
            <img className="menuButtonImg" src='/images/menubutton.png' alt='headermenubuttonimg'/>
            <Button className="button" variant="primary">
              {props.language === 'EN' ? 'Contact': 
              props.language === 'CN' ? '联系我' : ''}
            </Button>
        </div>
      </div>
  );
}

export default Header;
