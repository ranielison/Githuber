import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Welcome from "./pages/Welcome/index";
import Repositories from "./pages/Repositories/index";
import Organizations from "./pages/Organizations/index";

import { colors } from "../src/styles";
const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        User: createBottomTabNavigator(
          {
            Repositories,
            Organizations
          },
          {
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              activeTintColor: colors.white,
              inactiveColor: colors.whiteTransparent,
              style: {
                backgroundColor: colors.secundary
              }
            }
          }
        )
      },
      {
        initialRouteName: userLogged ? "User" : "Welcome"
      }
    )
  );

export default Routes;
