import './CarRacingGame.css';

import React from 'react';

type CarRacingGameProps = {};

const CarRacingGame: React.FC<CarRacingGameProps> = props => {
    return (
        <div className="carRacingGameRoot">
            <div className="roadBed"/>
            <div className="road">
                <div className="hero"/>
                <div className="enemy"/>
            </div>
            <span className="start"/>
            <span className="kilo"/>
            <div className="failbub">
                <span className="failtext"/>
                <span className="retry"/>
            </div>
        </div>
    );
};

export default CarRacingGame;
