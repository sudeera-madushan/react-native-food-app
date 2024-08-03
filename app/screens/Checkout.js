import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import Header from "../component/Header";
import { Input } from "react-native-elements";
import { CartContext } from "../context/CartContext";

export default function Checkout({ navigation }) {
  const { clearCart } = useContext(CartContext);
  const confirmOnPress = () => {
    clearCart();
    navigation.navigate("FinishScreen");
  };
  return (
    <View
      style={{
        backgroundColor: "#e7dedb",
        paddingHorizontal: 10,
        height: "100%",
      }}
    >
      <Header />
      <ScrollView>
        <View
          style={{
            marginTop: 10,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>
            Checkout
          </Text>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Phone" />
          <Input placeholder="Address" />
          <Input placeholder="City" />
          <Input placeholder="Note" multiline />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
          }}
          onPress={() => confirmOnPress()}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Confirm
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
