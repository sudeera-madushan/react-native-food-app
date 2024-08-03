import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/HomeScreen";
import ItemView from "./app/screens/ItemView";
import { CartProvider } from "./app/context/CartContext";
import Cart from "./app/screens/Cart";
import Checkout from "./app/screens/Checkout";
import FinishScreen from "./app/screens/FinishScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  console.log(StatusBar);
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Welcome"
            options={{ headerShown: false }}
            component={WelcomeScreen}
          />
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Food"
            options={{ headerShown: false }}
            component={ItemView}
          />
          <Stack.Screen
            name="Cart"
            options={{ headerShown: false }}
            component={Cart}
          />
          <Stack.Screen
            name="Checkout"
            options={{ headerShown: false }}
            component={Checkout}
          />
          <Stack.Screen
            name="FinishScreen"
            options={{ headerShown: false }}
            component={FinishScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
