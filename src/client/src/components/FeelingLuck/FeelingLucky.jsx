import './FeelingLucky.css'

import * as React from "react";

import Header from "../Home/Header/Header";

type FeelingLuckyProps = {
  language: string;
}

const FeelingLucky: React.FC<FeelingLuckyProps> = props => {
  return (
      <div className="feelingLuckyRoot">
        <Header className="Header" language="EN" isHomePage={false}/>
        <div className="feelingLuckyContent">
          TEST
        </div>
      </div>
  );
}


export default FeelingLucky;
