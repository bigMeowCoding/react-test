import React, { memo, useCallback, useMemo, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import QrcodeCase from "./qrcode-case";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about"></Route>
        <Route path="/users"></Route>
        <Route path="/" component={QrcodeCase}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
