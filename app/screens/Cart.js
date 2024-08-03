import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../component/Header";
import { CartContext } from "../context/CartContext";
import { Icon } from "react-native-elements";

export default function Cart({ navigation }) {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
  }, [cart]);
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
        <View style={{ marginTop: 10 }}>
          {cart.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                navigation.navigate("Food", item);
              }}
            >
              <View
                style={{
                  padding: 10,
                  backgroundColor: "white",
                  borderRadius: 10,
                  marginVertical: 2,
                  flexDirection: "row",
                }}
              >
                <Image
                  style={{ width: 150, height: 150, borderRadius: 10 }}
                  source={{
                    uri: item.image,
                  }}
                  resizeMode="cover"
                  fadeDuration={500}
                />
                <View style={{ paddingStart: 10 }}>
                  <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
                    {item.name}
                  </Text>
                  <Text>{"Price: $ " + item.price}</Text>
                  <Text>{"Quantity: " + item.quantity}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "red",
                    position: "absolute",
                    right: 10,
                    bottom: 10,
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  <Icon
                    name="delete"
                    color="white"
                    type="material"
                    size={20}
                    onPress={() => {
                      cart.splice(cart.indexOf(item), 1);
                      setTotal(total - item.price * item.quantity);
                    }}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View
          style={{
            padding: 10,
            backgroundColor: "white",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>{"Total: "}</Text>
            <Text style={{ fontWeight: "bold" }}>{"$ " + total}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text>Delivery:</Text>
            <Text>$ 10</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text>Tax:</Text>
            <Text>0%</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text>Total Amount:</Text>
            <Text>$ {total + 10}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text>Payment Method:</Text>
            <Text>Cash</Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "red",
              padding: 10,
              borderRadius: 10,
              marginTop: 10,
            }}
            onPress={() => navigation.navigate("Checkout")}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
