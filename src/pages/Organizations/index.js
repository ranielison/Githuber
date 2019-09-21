import React from "react";

import { View } from "react-native";
import Header from "../../components/Header";

import Icon from "react-native-vector-icons/FontAwesome/";
import { PropTypes } from "prop-types";
const Organizations = () => (
  <View>
    <Header title="Organizations" />
  </View>
);

const TabIcon = ({ tintColor }) => (
  <Icon name="building" size={20} color={tintColor} />
);

TabIcon.PropTypes = {
  tintColor: PropTypes.string.isRequired
};

Organizations.navigationOptions = {
  tabBarIcon: TabIcon
};
export default Organizations;
