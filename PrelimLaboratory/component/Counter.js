
//Shaira Verona, Maejean Roble IT35-B
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const Counter = () => {
  const [quantity, setQuantity] = useState(0);
  const [inputQuantity, setInputQuantity] = useState("");

  const handleInputChange = (text) => {
    setInputQuantity(text);
  };

  const handleAddQuantity = () => {
    const newQuantity = parseInt(inputQuantity);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(quantity + newQuantity);
      setInputQuantity("");
    }
  };

  const handleRemoveQuantity = () => {
    const newQuantity = parseInt(inputQuantity);
    if (!isNaN(newQuantity) && newQuantity >= 0 && newQuantity <= quantity) {
      setQuantity(quantity - newQuantity);
      setInputQuantity("");
    }
  };

  const handleReset = () => {
    setQuantity(0);
    setInputQuantity("");
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          color: "black",
          paddingTop: 30,
          paddingBottom: 30,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 24,
          borderColor: "brown",
          borderWidth: 2,
          backgroundColor: "beige",
          opacity: 0.9,
          marginBottom: 20
        }}
      >
        Coffee Quantity: {quantity}
      </Text>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <TextInput
          style={{
            height: 40,
            width: 100,
            backgroundColor: "beige",
            borderColor: "gray",
            borderWidth: 1,
            marginRight: 10,
            paddingLeft: 10
          }}
          keyboardType="numeric"
          placeholder="Quantity"
          value={inputQuantity}
          onChangeText={handleInputChange}
        />
        <Button
          color={"brown"}
          onPress={handleAddQuantity}
          title="Add"
        />
        <Button
          color={"red"}
          onPress={handleRemoveQuantity}
          title="Remove"
        />
      </View>
      <Button
        color={"brown"}
        onPress={handleReset}
        title="Reset"
      />
    </View>
  );
};

export default Counter;
