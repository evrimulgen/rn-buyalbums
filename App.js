import React, { Component } from "react";
import { Text, View } from "react-native";
import AppHeader from "./src/components/AppHeader";
import AlbumList from "./src/components/AlbumList";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader />
        <AlbumList />
      </View>
    );
  }
}
