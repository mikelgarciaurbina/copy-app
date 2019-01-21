import React, { Component, Fragment } from "react";
import { FAB } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

import { QRreader } from "../../components";

export default class Reader extends Component {
  onReadQR = () => {
    const { navigation } = this.props;
    navigation.navigate("Menu");
  };

  render() {
    return (
      <Fragment>
        <QRreader onRead={this.onReadQR} />
        <View style={styles.container}>
          <Text style={styles.title}>Leer código QR</Text>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    color: "#FFF",
    fontSize: 30,
    marginTop: 70
  }
});
