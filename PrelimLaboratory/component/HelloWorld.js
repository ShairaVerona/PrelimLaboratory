//Shaira Verona, Maejean Roble IT35-B

import React from "react";
import { Text, View, Image } from "react-native";

const HelloWorld = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 28,
          color: "white",
          paddingTop: 100,
          backgroundColor: "brown",
          opacity: 0.9,
          textAlign: "center",
        }}
      >
        "WELCOME MGA GWAPA"
      </Text>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 46,
          fontStyle: "italic",
          backgroundColor: "brown",
          borderWidth: 2,
          borderColor: "brown",
        }}
      >
        SHAIRA & MAEJEAN
      </Text>
      <Image
        source={{
          uri: "https://www.allrecipes.com/thmb/Hqro0FNdnDEwDjrEoxhMfKdWfOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21667-easy-iced-coffee-ddmfs-4x3-0093-7becf3932bd64ed7b594d46c02d0889f.jpg",
        }}
        style={{
          width: 350,
          height: 300,
          opacity: 0.9,
          borderWidth: 2,
          borderColor: "brown",
        }}
      />
    </View>
  );
};

export default HelloWorld;