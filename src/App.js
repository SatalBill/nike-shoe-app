import React from "react";
import {Provider} from "mobx-react";
import {configure} from "mobx";
import * as stores from "./stores";
import Routes from "./routes";

configure({strict: "always"});

const App = () => {
  return (
    <Provider {...stores}>
      <Routes />
    </Provider>
  );
};

export default App;
