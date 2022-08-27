import react, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import {News} from "../components/News";

const Home = () => {

  const [news, setNews] = useState([
    {title: "Should abortion be legal?", imgsource: "../assets/politics "},
    
  ]);

  return (
    <View>
      
      <FlatList 
        data = {news}
        renderItem = {
          ({item}) => {
            return (<News title={item.title} imgsource={item.imgsource}/>)}
        }
        />
          
    </View>
  );
};
export { Home };

/*
<News title={news[0].title} 
          imgsource={news[0].imgsource}></News>
           */