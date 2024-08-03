import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../component/Header";
import { Icon } from "react-native-elements";

export default function FinishScreen({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#e7dedb",
        paddingHorizontal: 10,
        height: "100%",
      }}
    >
      <Header />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon
          name="check-circle"
          type="font-awesome"
          size={100}
          color="green"
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "red",
          }}
        >
          Order Placed
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
