import react, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Post = ({ navigation, route, ...props }) => {
  const [text, setText] = useState("");
  const onChange = (textValue) => setText(textValue);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@postList");
      console.log(jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      throw new Error(400);
    }
  };
  const newPost = async (content) => {
    try {
      getData()
        .then((contentList) => {
          AsyncStorage.setItem(
            "@postList",
            JSON.stringify([content, ...contentList])
          );
        })
        .catch((err) => {
          AsyncStorage.setItem("@postList", JSON.stringify([content]));
        });
    } catch (e) {
      // error reading value
    }
    navigation.navigate("Home");
  };

  const storeData = async (value) => {
    getData("");
    try {
    } catch (e) {
      // saving error
    }
  };
  return (
    <ScrollView contentContainerStyle={{ justifyContent: "space-between" }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Write a description..."
          multiline={true}
          numberOfLines={5}
          onChangeText={onChange}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          newPost({
            title: text,
            imgsource:
              "https://icon-library.com/images/null-icon/null-icon-3.jpg",
          })
        }
      >
        <Text>Add Topic</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#a193c7",
    padding: 20,
    margin: 5,
  },
  container: {
    height: 100,
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    flexDirection: "column",
  },
});

export { Post };
