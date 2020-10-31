import './FeelingLucky.css'

import React, { useState } from "react";

import Header from "../Home/Header/Header";
import CarRacingGame from "./CarRacingGame";

type FeelingLuckyProps = {
  language: string;
}

const FeelingLucky: React.FC<FeelingLuckyProps> = props => {
  const [gameState, setGameState] = useState(0);

  return (
      <div className="feelingLuckyRoot">
        <Header className="Header" language="EN" isHomePage={false}/>
        <div className="carRacingGame">
          <CarRacingGame/>
        </div>
      </div>
  );
}


export default FeelingLucky;
