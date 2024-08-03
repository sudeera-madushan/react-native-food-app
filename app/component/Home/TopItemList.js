import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import TopItem from "./TopItem";
export const topItems = [
  {
    id: 1,
    image:
      "https://www.holidify.com/blog/wp-content/uploads/2015/11/Maharashtras_Misal_Pav.jpg",
    name: "Misal Pav",
    price: 100,
    description:
      "Misal Pav is quintessentially from Pune and is one of the most popular Maharashtrian breakfast, snack or even brunch. It is a street food popularly found in Mumbai. It has a spicy and tangy lentil curry which is made with moth beans and is served with Pav bread. At times, it is eaten with yoghurt to lessen the spice. Although it is a breakfast food but Maharashtrians enjoy it at time of the day.",
    rating: 3,
  },
  {
    id: 2,
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/Makke_di_roti_te_sarson_da_saag_20191010165339.jpg",
    name: "Makki di Roti and Sarson da Saag - Punjab",
    price: 300,
    description:
      "Makki di Roti and Sarson da Saag make for the staple food in North India especially in the state of Punjab. This traditional Indian dish may not look very enticing at first, but it has an authentic flavour to it, and it is rich in nutritive value. Accompany it with a glass of lassi and one has the perfect combination for a healthy and fulfilling lunch.",
    rating: 5,
  },
  {
    id: 3,
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_501548590_20200117171630.jpg",
    name: "Kosha Mangsho - West Bengal",
    price: 200,
    description:
      "Kosha Mangsho is a traditional dish prepared of Mutton (Goat meat) in every Bengali house. This dish of mutton with some thick curry is high on spices and richness. This dish is made with mutton and spices such as cloves, cinnamon, onion and garlic are used. This excellent recipe is full of the aroma and sweetness that is surely going to trigger your taste buds.",
    rating: 2,
  },
  {
    id: 4,
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/Dhokla_20191010162234.jpg",
    name: "Dhokla - Gujarat",
    price: 100,
    description:
      "Dhokla is an authentic snack which has originated from the state of Gujarat. This traditional food item is prepared out of gram flour and chana dal. Plus it is a reasonably easy recipe which can be prepared quickly within half an hour. Dhokla coupled with some chilli paste and chutney makes for the perfect snack to enjoy with friends over gossiping sessions.",
    rating: 3,
  },
  {
    id: 5,
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/516038873_56694dc851_b_20190130091515.jpg",
    name: "Pongal - Tamil Nadu",
    price: 50,
    description:
      "This is a staple meal during every auspicious festival of Tamil Nadu. Besides the rice and sweet milk, the dish is cooked with ingredients like cardamom, green gram, raisins and cashew nuts. According to the traditional beliefs, Pongal is cooked in open space in the sunlight, as it is dedicated to the sun god. The dish has two variants- one that's sweet another that's savoury which is served on banana leaves.",
    rating: 3,
  },
];
export default function TopItemList() {
  return (
    <View
      style={{ marginVertical: 5, backgroundColor: "white", borderRadius: 10 }}
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
        Special for you
      </Text>
      <ScrollView
        horizontal
        style={{
          width: "100%",
          height: 200,
        }}
      >
        {topItems.map((item) => (
          <TopItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
