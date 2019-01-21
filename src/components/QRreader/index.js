import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Vibration, View } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

import styles from './styles';

const IS_DEVICE = Constants.isDevice;

class QRreader extends Component {
  state = {
    hasCameraPermission: false,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  onRead = ({ data, type }) => {
    const { onRead } = this.props;
    Vibration.vibrate(500);
    onRead(data, type);
  };

  render() {
    const { hasCameraPermission } = this.state;

    return (
      <Fragment>
        {IS_DEVICE && hasCameraPermission && (
          <BarCodeScanner onBarCodeScanned={this.onRead} style={StyleSheet.absoluteFill} />
        )}
        <View style={styles.content}>
          <View style={styles.background} />
          <View style={styles.body}>
            <View style={styles.background} />
            <View style={styles.area} />
            <View style={styles.background} />
          </View>
          <View style={styles.background} />
        </View>
      </Fragment>
    );
  }
}
QRreader.propTypes = {
  onRead: PropTypes.func,
};
QRreader.defaultProps = {
  onRead() {},
};

export default QRreader;
