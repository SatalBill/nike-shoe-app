import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";

import Drawer from "./Drawer";

function Routes() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}

export default Routes;
