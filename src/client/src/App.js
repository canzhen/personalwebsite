import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Header } from "./components/Header/Header"
import { Body } from "./components/Body/Body"
import { Footer } from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header className="Header"></Header>
      <Body className="Body"></Body>
      <Footer className="Footer"></Footer>
    </div>
  );
}

export default App;
