import React, { Component } from "react";

import {
  View,
  Text,
  StatusBar,
  AsyncStorage,
  TouchableOpacity
} from "react-native";

import styles from "./styles";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

class Header extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();
    navigation.navigate("Welcome");
  };

  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.left} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={this.signOut}>
          <Icon name="exchange" size={16} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Header);
