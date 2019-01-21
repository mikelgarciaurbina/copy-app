import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import restaurant from "../../../assets/restaurant75.jpg";
import styles from "./styles";

export default class Home extends Component {
  onButtonPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Reader");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} resizeMode="cover" source={restaurant} />
        <Text style={styles.title}>Copy App!</Text>
        <Text style={styles.slogan}>Don't wait for the waiter</Text>
        <TouchableOpacity onPress={this.onButtonPress} style={styles.button}>
          <Text style={styles.buttonLabel}>Empezar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
