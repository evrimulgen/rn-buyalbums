import React, { Component } from "react";
import { Text, View } from "react-native";
import AppHeader from "./src/components/AppHeader";

export default class App extends Component {
  render() {
    return (
      <View>
        <AppHeader />
      </View>
    );
  }
}
