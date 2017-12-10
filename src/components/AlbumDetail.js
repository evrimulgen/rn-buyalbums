import React from "react";
import { View, Text, Linking } from "react-native";
import { Card, Button } from "react-native-elements";

const AlbumDetail = ({ album }) => {
  const { title, artist, image, url } = album;

  return (
    <View>
      <Card
        title={title}
        containerStyle={{
          marginBottom: 5,
          position: "relative"
        }}
        image={{ uri: image }}
      >
        <Text style={{ textAlign: "center", marginBottom: 10 }}>
          Album By {artist}
        </Text>
        <Button
          icon={{ name: "shopping-cart" }}
          backgroundColor="#691A99"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title="Buy"
          onPress={() => Linking.openURL(url)}
        />
      </Card>
    </View>
  );
};

export default AlbumDetail;
