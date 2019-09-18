import React, { Component } from "react";
import api from "../../services/api";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";

import styles from "./styles";
import AsyncStorage from "@react-native-community/async-storage";

export default class Welcome extends Component {
  state = {
    username: ""
  };

  checkUserExists = async username => {
    const user = await api.get(`/users/${username}`);
    return user;
  };

  saveUser = async username => {
    await AsyncStorage.setItem("@githuber:username");
    console.log("salvou");
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;
    console.log(navigation);

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);
    } catch (err) {
      alert("usuario inexistente");
    }
    navigation.navigate("Repositories");
  };

  render() {
    const { username } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.title}>Bem vindo!</Text>
        <Text style={styles.text}>
          Para continuar precisamos que você informe seu usuário no GitHub
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={username => this.setState({ username })}
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
