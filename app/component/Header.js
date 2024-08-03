import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Icon } from "react-native-elements";
import { CartContext } from "../context/CartContext";
export default function Header({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);
  return (
    <View>
      <TouchableOpacity
        style={{
          position: "absolute",
          width: 400,
          height: 800,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
          display: menuOpen ? "flex" : "none",
        }}
        onPress={() => setMenuOpen(!menuOpen)}
      >
        <View
          style={{
            backgroundColor: "white",
            opacity: 0.9,
            marginTop: 30,
            marginRight: 150,
            borderRadius: 10,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            padding: 10,
            height: "100%",
            flexDirection: "col",
            alignItems: "start",
            justifyContent: "start",

            shadowColor: "#f9f7f3",
            shadowOffset: {
              width: 1,
              height: 1,
            },
            shadowOpacity: 5,
            shadowRadius: 5,
            borderColor: "#f9f7f3",
            elevation: 4,
          }}
        >
          <View onPress={() => navigation.navigate("Profile")}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Icon
                padding={10}
                name="user"
                type="font-awesome-5"
                color="#1c1615"
                width="100%"
              />
              <Text style={{ fontWeight: "bold" }}>Sudeera Madushan</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              fontWeight: "bold",
              width: "100%",
              textAlign: "start",
              padding: 10,
              backgroundColor: "#e7dedb",
              borderRadius: 10,
              marginTop: 10,
              flexDirection: "row",
            }}
            onPress={() => navigation.navigate("Foods")}
          >
            <Icon
              style={{
                fontSize: 20,
              }}
              padding={10}
              name="hamburger"
              type="font-awesome-5"
              color="#1c1615"
              width="100%"
            />
            <Text>Foods</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Foods")}>
            <Text
              style={{
                fontWeight: "bold",
                width: "100%",
                textAlign: "start",
                padding: 10,
                backgroundColor: "#e7dedb",
                borderRadius: 10,
                fontSize: 20,
                marginTop: 2,
              }}
            >
              Restaurants
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Foods")}>
            <Text
              style={{
                fontWeight: "bold",
                width: "100%",
                textAlign: "start",
                padding: 10,
                backgroundColor: "#e7dedb",
                borderRadius: 10,
                fontSize: 20,
                marginTop: 2,
              }}
            >
              Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Text
              style={{
                fontWeight: "bold",
                width: "100%",
                textAlign: "start",
                padding: 10,
                backgroundColor: "#e7dedb",
                borderRadius: 10,
                fontSize: 20,
                marginTop: 2,
              }}
            >
              Welcome
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <View style={{ zIndex: 10 }}>
            <Icon
              padding={8}
              name="hamburger"
              type="font-awesome-5"
              color="#1c1615"
            />
          </View>
        </TouchableOpacity>

        <Text style={styles.title}>FoodSwift</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Icon
              padding={10}
              name="cart-plus"
              type="font-awesome-5"
              color="#1c1615"
            />
            <Text
              style={{
                fontWeight: "bold",
                position: "absolute",
                backgroundColor: "red",
                color: "white",
                borderRadius: 10,
                padding: 2,
                width: 20,
                textAlign: "center",
                marginTop: 10,
                zIndex: 10,
                height: 20,
                fontSize: 12,
                display: cart.length > 0 ? "flex" : "none",
                right: 2,
                top: -10,
              }}
            >
              {cart.length}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "white",
    padding: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "fixed",
  },
  title: {
    flex: 1,
    textAlign: "center",
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
  },
});
