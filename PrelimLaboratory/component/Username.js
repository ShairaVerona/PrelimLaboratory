//Shaira Verona, Maejean Roble IT35-B
import React from "react";
import { Text, View } from "react-native";

const GreetUser = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          backgroundColor: "black",
          fontWeight: "900",
          fontSize: 16,
        }}
      >
        Hello, We are the team GWAPA {props.name}!
      </Text>
    </View>
  );
};

const Username = () => {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "black",
        opacity: 0.9,
        paddingTop: 20,
        paddingBottom: 20,
        gap: 32,
        borderWidth: 2,
        borderColor: "white",
      }}
    >
      <GreetUser name="I AM SHAIRA" />
      <GreetUser name="I AM MAEJEAN" />
      
    </View>
  );
};

export default Username;