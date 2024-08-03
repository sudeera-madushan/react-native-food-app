import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SearchBar } from "react-native-elements";
import { itemList } from "../../screens/HomeScreen";
import MainItem from "./MainItem";
import { ScrollView } from "react-native";

export default function MainSearch({ navigation }) {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (search) {
      setItems(
        itemList.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
      setIsEmpty(true);
    } else {
      setItems([]);
      setIsEmpty(false);
    }
  }, [search]);
  return (
    <View>
      <SearchBar
        containerStyle={{
          backgroundColor: "transparent",
          padding: 0,
          paddingTop: 5,
        }}
        lightTheme
        placeholder="Search"
        inputContainerStyle={{ backgroundColor: "white", borderRadius: 10 }}
        onChange={(e) => setSearch(e.nativeEvent.text)}
        value={search}
      />
      <Text
        style={{
          fontWeight: "bold",
          paddingStart: 10,
          paddingTop: 5,
          marginTop: 5,
          paddingBottom: 0,
          display: items.length === 0 ? "none" : "flex",
        }}
      >
        Search Result
      </Text>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            display: items.length === 0 ? "none" : "flex",
            backgroundColor: "white",
            marginTop: 5,
            borderRadius: 10,
          }}
        >
          {items.map((item) => (
            <View style={styles.item} key={item.id}>
              <MainItem item={item} navigation={navigation} />
            </View>
          ))}
        </View>
      </ScrollView>

      {isEmpty && (
        <View
          style={{
            display: items.length === 0 ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            marginTop: 5,
            borderRadius: 10,
            backgroundColor: "white",
          }}
        >
          <Text>No items found</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "50%",
  },
});
