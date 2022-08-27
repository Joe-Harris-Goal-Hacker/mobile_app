import react, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

const Login = ({ navigation, route, ...props }) => {
  return (
    <View>
      <Text>Sign in</Text>
      <Button
        title="Go to Arguments"
        onPress={() => navigation.navigate("Arguments")}
      />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Post" onPress={() => navigation.navigate("Post")} />
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};
export { Login };
