import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import QrcodeCase from "./qrcode-case";
import about from "./about/about";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" children={about} />
        <Route path="/users" />
        <Route path="/" component={QrcodeCase} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
