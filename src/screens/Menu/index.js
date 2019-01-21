import React, { Component, Fragment } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Button, IconButton } from "react-native-paper";

import { Popup } from "../../components";

import comedor from "../../../assets/comedor.jpg";
import chickenFiletBurger from "../../../assets/chickenFiletBurger.jpg";
import chickenStripBurger from "../../../assets/chickenStripBurger.jpeg";
import cheeseBurger from "../../../assets/cheeseBurger.jpg";
import megaVeganBurger from "../../../assets/megaVeganBurger.jpg";
import lacteos from "../../../assets/lacteos.png";
import gluten from "../../../assets/gluten.png";

import styles from "./styles";

export default class Home extends Component {
  state = {
    activeInfo: false,
    cuantity: 1,
    popupActive: false
  };

  onButtonPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Reader");
  };

  onPressAdd = () => {
    this.setState(prevState => ({ cuantity: prevState.cuantity + 1 }));
  };

  onPressCancel = () => {
    this.setState({ popupActive: false });
  };

  onPressItem = () => {
    this.setState({ popupActive: true });
  };

  onPressItemFav = () => {
    this.setState(prevState => ({ activeInfo: !prevState.activeInfo }));
  };

  onPressPay = () => {
    const { navigation } = this.props;
    navigation.navigate("Pay");
  };

  onPressRemove = () => {
    this.setState(prevState => ({ cuantity: prevState.cuantity - 1 }));
  };

  render() {
    const { activeInfo, cuantity, popupActive } = this.state;

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={comedor} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Restaurante Paco</Text>
        </View>
        <View style={styles.list}>
          <ScrollView>
            <TouchableOpacity onPress={this.onPressItem} style={styles.item}>
              <View style={styles.row}>
                <Image style={styles.itemImage} source={chickenFiletBurger} />
                <View style={styles.data}>
                  <Text style={styles.itemTitle}>Chicken Filet Burger</Text>
                  <Text style={styles.itemDescription}>
                    Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
                    eiusmod tempor incididunt
                  </Text>
                  <Text style={styles.itemPrice}>7,65€</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressItemFav} style={styles.item}>
              <View style={styles.row}>
                <Image style={styles.itemImage} source={chickenStripBurger} />
                <View style={styles.data}>
                  <Text style={styles.itemTitle}>Chicken Strip Burger</Text>
                  <Text style={styles.itemDescription}>
                    Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
                    eiusmod tempor incididunt
                  </Text>
                  <Text style={styles.itemPrice}>8,25€</Text>
                </View>
              </View>
              {activeInfo && (
                <Fragment>
                  <View style={styles.info}>
                    <View style={styles.ingredients}>
                      <Text style={styles.infoTitle}>Ingredientes</Text>
                      <Text style={styles.infoDescription}>
                        - Carne de ternera
                      </Text>
                      <Text style={styles.infoDescription}>- Queso</Text>
                      <Text style={styles.infoDescription}>- Tomate</Text>
                      <Text style={styles.infoDescription}>- Lechuga</Text>
                      <Text style={styles.infoDescription}>- Mayonesa</Text>
                    </View>
                    <View>
                      <Text style={styles.infoTitle}>Alergenos</Text>
                      <View style={styles.row}>
                        <Image style={styles.alergeno} source={lacteos} />
                        <Text style={styles.infoDescription}> Lacteo</Text>
                      </View>
                      <View style={styles.row}>
                        <Image style={styles.alergeno} source={gluten} />
                        <Text style={styles.infoDescription}> Gluten</Text>
                      </View>
                      <View style={styles.stars}>
                        <IconButton
                          color="#ffeb3b"
                          icon="star"
                          size={30}
                          style={styles.iconStar}
                        />
                        <IconButton
                          color="#ffeb3b"
                          icon="star"
                          size={30}
                          style={styles.iconStar}
                        />
                        <IconButton
                          color="#ffeb3b"
                          icon="star"
                          size={30}
                          style={styles.iconStar}
                        />
                        <IconButton
                          color="#AAA"
                          icon="star"
                          size={30}
                          style={styles.iconStar}
                        />
                        <IconButton
                          color="#AAA"
                          icon="star"
                          size={30}
                          style={styles.iconStar}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.inputInfo}>
                    <IconButton
                      icon="remove"
                      size={40}
                      onPress={this.onPressRemove}
                    />
                    <Text style={styles.inputCuantity}>{cuantity}</Text>
                    <IconButton
                      icon="add"
                      size={40}
                      onPress={this.onPressAdd}
                    />
                    <Button mode="contained" onPress={this.onPressPay} style={styles.payButton}>
                      Pagar
                    </Button>
                  </View>
                </Fragment>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressItem} style={styles.item}>
              <View style={styles.row}>
                <Image
                  resizeMode="stretch"
                  style={styles.itemImage}
                  source={cheeseBurger}
                />
                <View style={styles.data}>
                  <Text style={styles.itemTitle}>CheeseBurger</Text>
                  <Text style={styles.itemDescription}>
                    Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
                    eiusmod tempor incididunt
                  </Text>
                  <Text style={styles.itemPrice}>6,45€</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressItem} style={styles.item}>
              <View style={styles.row}>
                <Image style={styles.itemImage} source={megaVeganBurger} />
                <View style={styles.data}>
                  <Text style={styles.itemTitle}>Mega Vega Burger</Text>
                  <Text style={styles.itemDescription}>
                    Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
                    eiusmod tempor incididunt
                  </Text>
                  <Text style={styles.itemPrice}>10,95€</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <Popup active={popupActive} onClose={this.onPressCancel}>
          <View style={styles.popup}>
            <Text style={styles.popupTitle}>Cantidad:</Text>
            <View style={styles.input}>
              <IconButton
                icon="remove"
                size={40}
                onPress={this.onPressRemove}
              />
              <Text style={styles.cuantity}>{cuantity}</Text>
              <IconButton icon="add" size={40} onPress={this.onPressAdd} />
            </View>
            <View style={styles.buttons}>
              <Button color="#ff1744" onPress={this.onPressCancel}>
                Cancelar
              </Button>
              <View style={styles.accept} />
              <Button mode="contained" onPress={this.onPressPay}>
                Pagar
              </Button>
            </View>
          </View>
        </Popup>
      </View>
    );
  }
}
