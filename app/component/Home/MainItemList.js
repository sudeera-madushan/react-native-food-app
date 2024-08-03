import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { topItems } from "./TopItemList";
import TopItem from "./TopItem";
import MainItem from "./MainItem";
import { itemList } from "../../screens/HomeScreen";
import Footer from "../Footer";

export default function MainItemList({ navigation }) {
  return (
    <View
      style={{
        marginVertical: 5,
        backgroundColor: "white",
        borderRadius: 10,
        marginBottom: 200,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          paddingStart: 10,
          paddingTop: 5,
          marginTop: 5,
          paddingBottom: 0,
        }}
      >
        We best offer
      </Text>
      <View style={styles.container}>
        {itemList.map((item) => (
          <View style={styles.item} key={item.id}>
            <MainItem item={item} navigation={navigation} />
          </View>
        ))}
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  item: {
    width: "50%",
  },
});
