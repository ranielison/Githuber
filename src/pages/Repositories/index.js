import React, { Component } from "react";

import { View, Text, Button, ActivityIndicator } from "react-native";

import PropTypes from "prop-types";
import api from "../../services/api";
import Header from "../../components/Header/index";
import Icon from "react-native-vector-icons/FontAwesome/";
import AsyncStorage from "@react-native-community/async-storage";
import styles from "./styles";

const TabIcon = ({ tintColor }) => (
  <Icon name="list-alt" size={20} color={tintColor} />
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  state = {
    data: [],
    loading: true
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem("@githuber:username");
    const { data } = await api.get(`/users/${username}/repos`);
    this.setState({ data, loading: false });
  }

  renderList = () => <Text>Lista</Text>;

  render() {
    const { loading } = this.state;
    return (
      <View>
        <Header title="Repositorios" />
        {loading ? (
          <ActivityIndicator size="small" style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
