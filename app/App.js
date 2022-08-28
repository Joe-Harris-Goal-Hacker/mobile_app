import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Login } from "./screens/Login";
import { Home } from "./screens/Home";

import { Post } from "./screens/Post";

import { Arguments } from "./screens/Arguments";

import { Settings } from "./screens/Settings";
import { Agree } from "./screens/Agree";
import { Colors } from "./constants/Colors";

import * as eva from "@eva-design/eva";

import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
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
      screenOptions={{}}
      tabBarOptions={{
        tabBarActiveTintColor: Colors.secondary_light,
        tabBarLabelColor: Colors.secondary_light,
        tabBarBackgroundColor: Colors.secondary,
        backgroundColor: Colors.secondary,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      <Stack.Screen
        name="Post"
        component={Post}
        options={{
          tabBarLabel: "Post",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" color={color} size={size} />
          ),
        }}
      />

      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
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
    </ApplicationProvider>
  );
}

export default App;
