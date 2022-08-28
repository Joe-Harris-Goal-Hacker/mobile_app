import react, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { News } from "../components/News";
import { Post } from "./Post";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation, route, ...props }) => {
  useEffect(() => {
    // getData.then((newsList) => {
    //   setNewsList(newsList);
    // });
    setInterval(() => {
      try {
        AsyncStorage.getItem("@postList").then((jsonValue) => {
          console.log(jsonValue);
          const list = jsonValue != null ? JSON.parse(jsonValue) : null;
          setNews(list);
        });
      } catch (e) {
        // error reading value
        throw new Error(400);
      }
    }, 2000);
  }, [route, navigation]);

  const [news, setNews] = useState([]);

  const addNews = (title, imgsource) => {
    setNews((prevNews) => {
      return [{ title, imgsource }, ...prevNews];
    });
  };

  return (
    <>
      {/* <Post addNews={addNews} /> */}
      <View>
        <FlatList
          data={news}
          renderItem={({ item }) => {
            return <News title={item.title} imgsource={item.imgsource} />;
          }}
        />
      </View>
    </>
  );
};
export { Home };

/*
<News title={news[0].title} 
          imgsource={news[0].imgsource}></News>
           */
