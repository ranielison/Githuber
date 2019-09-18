import React from "react";

import { View, Button } from "react-native";

// import { Container } from './styles';

const Repositories = props => (
  <View>
    <Button
      onPress={() => props.navigation.navigate("Welcome")}
      title="Tela inicial"
    />
  </View>
);

export default Repositories;
