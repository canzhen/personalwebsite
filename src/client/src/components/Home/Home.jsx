import './Home.css'

import * as React from "react";

import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

const Home: React.FC = () => {
    return (
        <div className="root">
            <Header language="EN" isHomePage/>
            <Body language="EN"/>
            <Footer language="EN"/>
        </div>
    )
}

export default Home;
