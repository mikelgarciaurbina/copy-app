import React, { Component } from "react";
import { Provider as PaperProvider } from "react-native-paper";

import Home from './src/screens';

export default class App extends Component {
  render() {
    return (
      <PaperProvider>
        <Home />
      </PaperProvider>
    );
  }
}
