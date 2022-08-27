import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Login } from "./screens/Login";
import { Home } from "./screens/Home";

import { Post } from "./screens/Post";

import { Arguments } from "./screens/Arguments";

import { Settings } from "./screens/Settings";
import { Agree } from "./screens/Agree";
import { Colors } from "./constants/Colors";
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
      }}
    >
      <Stack.Screen name="Feed" component={Home} />

      <Stack.Screen name="Post" component={Post} />

      <Stack.Screen name="Account" component={Settings} />
    </Tab.Navigator>
  );
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />

        <Stack.Screen name="Arguments" component={Arguments} />
        <Stack.Screen name="Agree" component={Agree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
