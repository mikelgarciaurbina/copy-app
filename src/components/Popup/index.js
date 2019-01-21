import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from "react-native";

import styles from './styles';

const Popup = ({ active, children, onClose }) => (
  active && (
  <TouchableOpacity onPress={onClose} style={styles.container}>
    <View pointerEvents="box-none" style={styles.card}>{children}</View>
  </TouchableOpacity>
  )
);
Popup.propTypes = {
  active  : PropTypes.bool,
  children: PropTypes.node,
  onClose : PropTypes.func,
};
Popup.defaultProps = {
  active  : false,
  children: undefined,
  onClose() {},
};

export default Popup;
