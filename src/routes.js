import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Welcome from "./pages/Welcome/index";
import Repositories from "./pages/Repositories/index";

const Routes = createAppContainer(
  createSwitchNavigator({
    Welcome,
    Repositories
  })
);

export default Routes;
