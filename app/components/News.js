import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  Icon,
  Layout,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

const News = ({ title, imgsource, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={{ flexDirection: "column", flexWrap: "wrap" }}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <Image source={{ uri: imgsource }} style={styles.img} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    backgroundColor: "#daf0f5",
    padding: 10,
    margin: 3,
    flexDirection: "row",
    borderWidth: 3,
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  img: {
    alignItems: "flex-end",
    marginBottom: 0,
    width: 70,
    height: 70,
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  text: {
    justifyContent: "flex-start",
    fontSize: 20,
    flexWrap: "wrap",
    width: 250,
    fontWeight: "600",
  },
});

export { News };
