import react, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "../components/Header";

const Agree = ({}) => {
  return (
    <>
      <View style={{ flexDirection: "column" }}>
        <Header title={title} />
        <Image source={{ uri: imgsource }} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Button title="Agree" />
        <Button title="Neutral" />
        <Button title="Disagree" />
      </View>
    </>
  );
};
export { Agree };

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});

// { navigation, route, ...props }
