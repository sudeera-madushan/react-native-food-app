import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AppButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style.button}>Start eat</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 30,
    fontSize: 20,
    paddingHorizontal: 30,
    fontWeight: "bold",
    marginHorizontal: 110,
  },
});
