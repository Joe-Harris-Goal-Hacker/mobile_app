import react, { useEffect, useState } from "react";
import { View, Text, Button, StatusBar } from "react-native";

const Login = ({ navigation, route, ...props }) => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="dark-content"
      />
      <View style={{ marginTop: 60 }}>
        <Text>Sign in</Text>
        {/* <Button
        title="Go to Arguments"
        onPress={() => navigation.navigate("Arguments")}
      /> */}
        <Button
          title="Home"
          onPress={() => navigation.navigate("BottomTabNavigator")}
        />
        {/* <Button title="Post" onPress={() => navigation.navigate("Post")} />
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      /> */}
      </View>
    </>
  );
};
export { Login };
