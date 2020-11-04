import './Footer.css'

import * as React from "react";
import { Link } from "react-router-dom";

type FooterProps = {
  language: string,
}

const Footer: React.FC<FooterProps> = props => {
  return (
      <div className="footer">  
        <p>
          {props.language === 'EN' ? '@Copyright: Canzhen Zhou since 2020.' : 
            props.language === 'CN' ? '©2020 Canzhen' : '' }
        </p>
        <Link className="fbarRight" to={props.language === 'EN' ? '/cn' : props.language === 'CN' ? '/' : ''}>
          {props.language === 'EN' ? '中文' : 
          props.language === 'CN' ? 'English' : ''}
        </Link>
      </div>
  );
}

export default Footer;
