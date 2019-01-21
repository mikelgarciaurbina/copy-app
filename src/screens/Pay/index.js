import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import card from "../../../assets/card.jpg";

import styles from "./styles";

export default class Home extends Component {
  onButtonPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Confirm");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={card} />
        <Text style={styles.total}>Total: 18,65€</Text>
        <TouchableOpacity onPress={this.onButtonPress} style={styles.button}>
          <Text style={styles.buttonLabel}>Pagar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
