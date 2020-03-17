import './Home.css'

import * as React from "react";

import { Header } from "./Header/Header"
import { Body } from "./Body/Body"
import { Footer } from "./Footer/Footer"

export class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <Header className="Header"></Header>
                <Body className="Body"></Body>
                <Footer className="Footer"></Footer>
            </div>
        )
    };
}