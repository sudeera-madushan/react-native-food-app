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
import Footer from "../component/Footer";
import { cart } from "./HomeScreen";
import { CartContext } from "../context/CartContext";
import { Icon } from "react-native-elements";

export default function ItemView({ route, navigation }) {
  const item = route.params;

  const { cart, addItemToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const [haveInCart, setHaveInCart] = useState(
    cart.some((cartItem) => cartItem.id === item.id) ? true : false
  );
  useEffect(() => {
    setHaveInCart(cart.some((cartItem) => cartItem.id === item.id));
    setQuantity(
      cart.filter((cartItem) => cartItem.id === item.id)[0]
        ? cart.filter((cartItem) => cartItem.id === item.id)[0].quantity
        : 0
    );
  }, [cart]);

  const addToCart = () => {
    addItemToCart({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      description: item.description,
      quantity: 1,
    });
    setQuantity(
      cart.filter((cartItem) => cartItem.id === item.id)[0]
        ? cart.filter((cartItem) => cartItem.id === item.id)[0].quantity
        : 0
    );
  };
  return (
    <View
      style={{
        backgroundColor: "#e7dedb",
        paddingHorizontal: 10,
      }}
    >
      <Header navigation={navigation} />
      <ScrollView>
        <View
          style={{
            marginVertical: 5,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Image
            style={{ width: "100%", height: 300, borderRadius: 10 }}
            source={{
              uri: item.image,
            }}
            resizeMode="cover"
            fadeDuration={500}
          />
          <View
            style={{
              padding: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 25,
                  width: "80%",
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {"$ " + item.price}
              </Text>
            </View>
            <Text
              style={{
                color: "gray",
                fontWeight: "heavy",
                fontSize: 16,
              }}
            >
              {item.description}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", paddingBottom: 100 }}>
          <TouchableOpacity
            style={{
              backgroundColor: haveInCart ? "gray" : "#e63946",
              padding: 10,
              marginBottom: 5,
              borderRadius: 10,
              alignItems: "center",
              width: "85%",
            }}
            onPress={addToCart}
            disabled={haveInCart}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Add To Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: !haveInCart ? "gray" : "#e63946",
              padding: 10,
              marginBottom: 5,
              borderRadius: 10,
              alignItems: "center",
              marginStart: 3,
              width: "14%",
            }}
            onPress={() => {
              addToCart();
            }}
          >
            <Icon name="plus" type="font-awesome-5" color="white" />
            <Text
              style={{
                fontWeight: "bold",
                position: "absolute",
                backgroundColor: "gray",
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
              {quantity}
            </Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
