import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Footer() {
  return (
    // write example footer
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        borderTopWidth: 1,
        borderColor: "lightgray",
        borderRadius: 10,
      }}
    >
      <Text style={{ textAlign: "center", color: "gray", fontSize: 10 }}>
        {new Date().getFullYear() + " - DoneWithIt. All rights reserved"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
