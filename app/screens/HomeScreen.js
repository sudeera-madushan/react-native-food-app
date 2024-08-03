import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import TopItemList from "../component/Home/TopItemList";
import MainSearch from "../component/Home/MainSearch";
import MainItemList from "../component/Home/MainItemList";
import { Icon } from "react-native-elements";
import Header from "../component/Header";
import Footer from "../component/Footer";
export const itemList = [
  {
    id: 6,
    image:
      "https://www.holidify.com/blog/wp-content/uploads/2015/11/8551488501_893b368f26_b.jpg",
    name: "Papaya Khar - Assam",
    price: 20,
    description:
      "This dish of Assamese cuisine is one of a kind. It is a delicious curry made from raw papaya, pulses, taro and also with a main non-vegetarian ingredient. All of these is then filtered through dried banana leaves which gives it a unique and an unexpectedly refreshing flavour. It is generally eaten with rice during lunch.",
    rating: 4,
  },
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
    id: 8,
    image: "https://www.holidify.com/blog/wp-content/uploads/2016/09/dham.jpg",
    name: "Dhaam - Himachal Pradesh",
    price: 300,
    description:
      "Dhaam is a complete food that along with a great taste promises a healthy dose of nutrients. The dish includes dal, rajma, rice, curd, boor ki Kadi and is very well complemented with gur (jaggery). Dhaam is a plate full of delicious delicacies that are a must-serve on the occasions and festivals. The distinctive feature about this dish is that it is prepared by special chefs known as ‘botis’. To grab the best taste of Dhaam you must visit Himachal during festivals.",
    rating: 1,
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
    id: 7,
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/PoothaRekulu_20200117180234.jpg",
    name: "Pootha Rekulu",
    price: 40,
    description:
      "Pootharekulu, one of the most popular sweet dish in Andhra Pradesh prepared during festivals, religious occasions. The water-like sweet is made extensively in Attreyapuram, a village in East Godavari district, AP. This unique saviour is prepared by rice batter, Ghee, and powdered sugar. Also, it is stuffed with various kinds of dry fruits to enrich the taste.",
    rating: 2,
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
    id: 9,
    image:
      "https://www.holidify.com/blog/wp-content/uploads/2016/10/India_food.jpg",
    name: "Hyderabadi Biryani - Telangana",
    price: 200,
    description:
      "Thanks to the major influence of Nizams in the state, Hyderabadi Biryani has come to be known worldwide as one of India’s jeweled food items. It is of two types; Kachchi gosht ki biryani and Pakki biryani. Marinated meat is cooked in layers of rice in a big handi which is covered with flat dough that eventually rises due to heat; indicating that the biryani is ready to be devoured.",
    rating: 5,
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
  {
    id: 10,
    image: "https://www.holidify.com/images/cmsuploads/articles/448.jpg",
    name: "Thukpa - Arunachal Pradesh",
    price: 60,
    description:
      "Thukpa is a kind of noodle soup of Tibetan origin that has found its way to being one of the most loved food in Sikkim. Thukpa is something that is very healthy and tasty at the same time - a rare combination to find, isn't it? One can find both vegetables as well as chicken thukpa here and mind you both are worth trying. One can find almost every kind of locally grown vegetable in this soup, but the most common ones are carrots, bell peppers, spinach, cauliflower and celery. It is rich in spices too and has an enriching taste. One serving is enough for an individual, but no one can stop at one because why not. ",
    rating: 3,
  },
];
export default function HomeScreen({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <View
      style={{
        backgroundColor: "#e7dedb",
        paddingHorizontal: 10,
      }}
    >
      <Header navigation={navigation} />
      <MainSearch navigation={navigation} />
      <ScrollView>
        <TopItemList />
        <MainItemList navigation={navigation} />
      </ScrollView>
      <Footer />
    </View>
  );
}
