import React, { Component } from "react";
import createNavigation from "./routes";

import { AsyncStorage } from "react-native";

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

    if (!userChecked) return null;

    const Routes = createNavigation(userLogged);

    return <Routes />;
  }
}
