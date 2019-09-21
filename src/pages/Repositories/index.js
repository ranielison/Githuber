import React from "react";

import { View, Text, Button } from "react-native";
import Header from "../../components/Header/index";
import Icon from "react-native-vector-icons/FontAwesome/";

import PropTypes from "prop-types";

const Repositories = props => (
  <View>
    <Header title="Repositorios" />
  </View>
);

const TabIcon = ({ tintColor }) => (
  <Icon name="list-alt" size={20} color={tintColor} />
);

TabIcon.PropTypes = {
  tintColor: PropTypes.string.isRequired
};

Repositories.navigationOptions = {
  tabBarIcon: TabIcon
};

export default Repositories;
