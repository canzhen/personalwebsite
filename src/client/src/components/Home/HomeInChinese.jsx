import './Home.css'

import * as React from "react";

import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

const HomeInChinese: React.FC = () => {
    return (
        <div className="App">
            <Header className="Header" language="CN"></Header>
            <Body className="Body" language="CN"></Body>
            <Footer className="Footer" language="CN"></Footer>
        </div>
    )
}

export default HomeInChinese;
