import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

export default function TopItem({ item }) {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: 150,
          height: 180,
          margin: 5,
          borderRadius: 10,
          shadowColor: "#f9f7f3",
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowOpacity: 5,
          shadowRadius: 5,
          borderColor: "#f9f7f3",
          elevation: 4,
          padding: 10,
          paddingStart: 9,
        }}
      >
        <Image
          style={{ width: "100%", height: 120, borderRadius: 10 }}
          source={{
            uri: item.image,
          }}
          resizeMode="cover"
          fadeDuration={500}
        />

        <Text style={{ fontWeight: "bold", fontSize: 12, marginTop: 4 }}>
          {item.name.length > 18 ? item.name.slice(0, 18) + "..." : item.name}
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 12, marginTop: 4 }}>$ {item.price}</Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Icon
              name="star"
              color={item.rating >= 1 ? "#fb8500" : "#eae2b7"}
              size={13}
            />
            <Icon
              name="star"
              color={item.rating >= 2 ? "#fb8500" : "#eae2b7"}
              size={13}
            />
            <Icon
              name="star"
              color={item.rating >= 3 ? "#fb8500" : "#eae2b7"}
              size={13}
            />
            <Icon
              name="star"
              color={item.rating >= 4 ? "#fb8500" : "#eae2b7"}
              size={13}
            />
            <Icon
              name="star"
              color={item.rating === 5 ? "#fb8500" : "#eae2b7"}
              size={13}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
