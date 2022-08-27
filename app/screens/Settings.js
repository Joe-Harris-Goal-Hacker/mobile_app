import react, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SettingComponent } from "../components/SettingComponent";
import profpic from "../assets/profpic.png";
import { UserName } from "../components/UserName";

const Settings = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={profpic} style={styles.img}/>
        <UserName />
      </View>
      <SettingComponent title={"Notification"} iconType={"notification-clear-all"}/>
      <SettingComponent title={"My Views"} iconType = {"comment-arrow-right-outline"}/>
      <SettingComponent title={"My Topics"} iconType = {"post-outline"}/>
      <SettingComponent title={"Settings"} iconType = {"tools"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#a8d5e0',
    flexDirection: 'row'
  },
  img: {
    width: 100,
    height:100,
    borderRadius: 20
  }
});
export { Settings };
