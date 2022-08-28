import react, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import {News} from "../components/News";
import { Post } from "./Post";
import { useState } from "react";

const Home = () => {

  const [news, setNews] = useState([
    {title: "Should abortion be legal?", imgsource: 'https://cdn.cfr.org/sites/default/files/styles/open_graph/public/image/2022/06/Abortion.jpg'},

    {title: "Should we allow human gene editing", imgsource: 'https://scopeblog.stanford.edu/wp-content/uploads/2017/08/gene-editing-1152x578.jpg'},

    {title: "Is Google's Lamda conscious?", imgsource: 'https://images.theconversation.com/files/468975/original/file-20220615-25-xd546f.jpg?ixlib=rb-1.1.0&rect=41%2C0%2C6860%2C3424&q=45&auto=format&w=1356&h=668&fit=crop'},

    {title: "Can we rely on Cryptocurrency?", imgsource: 'https://penntoday.upenn.edu/sites/default/files/2022-01/cryptocurrency-main.jpg'},

    {title: "Your view on Nancy Pelosi's visit to Taiwan?", imgsource: 'https://i.guim.co.uk/img/media/e01a5e15cf21d16e4db0b62f07d22b110c1606ea/0_0_3845_2307/master/3845.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=061484339da243a3b0ce64766eca4697'},

    {title: "How should we address poverty issue worldwide?", imgsource: 'https://images.theconversation.com/files/462848/original/file-20220512-20-vzo0jy.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip'},

    {title: "Should gun control be tightened or loosened?", imgsource: 'https://cdn.britannica.com/45/190745-050-1F7EC780/Gun-Constitution.jpg?q=60'},

    {title: "Is COVID a threat to us anymore?", imgsource: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2022/8/20/w900X450/Should112.jpg?w=400&dpr=2.6'}
    
  ]);

  const addNews = (title, imgsource) => {
    setNews(prevNews => {
      return [{title, imgsource}, ...prevNews]
     });
  }
  

  return (
    <>
    <Post addNews={addNews}/>
    <View>
      <FlatList 
        data = {news}
        renderItem = {
          ({item}) => {
            return (<News title={item.title} imgsource={item.imgsource}/>)}
        }
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