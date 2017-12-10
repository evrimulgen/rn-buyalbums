import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";

const AppHeader = () => {
  return (
    <View>
      <Header
        centerComponent={{
          text: "Buy Albums!",
          style: {
            color: "#fff",
            fontSize: 22
          }
        }}
        outerContainerStyles={{
          backgroundColor: "#9B26AF",
          elevation: 2,
          height: 60,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          position: "relative"
        }}
      />
    </View>
  );
};

const style = {
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  }
};

export default AppHeader;
