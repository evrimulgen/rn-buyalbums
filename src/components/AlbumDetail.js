import React from "react";
import { View, Text } from "react-native";

const AlbumDetail = ({ album }) => {
  const { title } = album;

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default AlbumDetail;
