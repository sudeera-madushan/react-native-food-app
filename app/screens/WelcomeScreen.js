import React from "react";
import PropTypes from "prop-types";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import welcomeWallpaper from "../assets/welcomeWallpaper.jpg";
import logo from "../assets/logo.png";
import AppButton from "../component/Button";
function WelcomeScreen(props) {
  return (
    <SafeAreaView>
      <Image style={style.image} source={welcomeWallpaper} />
      <View style={style.body}>
        <View style={style.bodyView}>
          <Image source={logo} style={style.logo} />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              color: "white",
              fontWeight: "semibold",
              marginTop: 10,
            }}
          >
            Welcome to
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 40, color: "red" }}>
            FoodSwift
          </Text>
          <Text style={{ marginBottom: 50 }}>Let's go to eat ! </Text>
        </View>
        <AppButton onPress={() => props.navigation.navigate("Home")} />
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;

const style = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 150,
    height: 150,
  },
  body: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
  },
  bodyView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
