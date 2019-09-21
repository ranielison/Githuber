import React, { Component } from "react";
import createNavigator from "./routes";
import { YellowBox } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem("@githuber:username");
    this.setState({
      userChecked: true,
      userLogged: !!username
    });
  }

  render() {
    const { userChecked, userLogged } = this.state;
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated"
    ]);
    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return <Routes />;
  }
}
