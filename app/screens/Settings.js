import react, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SettingComponent } from "../components/SettingComponent";

const Settings = () => {
  return (
    <View>
      <View>

      </View>
      <SettingComponent title={"Notification"} iconType={"notification-clear-all"}/>
      <SettingComponent title={"My Views"} iconType = {"comment-arrow-right-outline"}/>
      <SettingComponent title={"My Topics"} iconType = {"post-outline"}/>
      <SettingComponent title={"Settings"} iconType = {"tools"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  
});
export { Settings };
