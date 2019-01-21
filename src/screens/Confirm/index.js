import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Colors, IconButton } from "react-native-paper";

import card from "../../../assets/card.jpg";

import styles from "./styles";

export default class Home extends Component {
  onButtonPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Reader");
  };

  render() {
    return (
      <View style={styles.container}>
        <IconButton color="#009688" icon="check" size={200} />
        <Text style={styles.title}>¡Pedido confirmado!</Text>
        <Text style={styles.description}>Disfruta y que aproveche</Text>
      </View>
    );
  }
}
