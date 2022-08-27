import react, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import {News} from "../components/News";

const Home = () => {
  return (
    <View>
      <News></News>
      <News></News>
      <News></News>
    </View>
  );
};
export { Home };
