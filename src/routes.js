import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Welcome from "./pages/Welcome/index";
import Repositories from "./pages/Repositories/index";

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        Repositories
      },
      {
        initialRouteName: userLogged ? "Welcome" : "Repositories"
      }
    )
  );

export default Routes;
