import react, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity,
Button } from "react-native";

const Post = ({addNews}) => {
  console.log(addNews);
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);
  const imgsource = 'https://icon-library.com/images/null-icon/null-icon-3.jpg'
  return (
    
    <ScrollView contentContainerStyle = {{justifyContent: "space-between"}}>
      <View style={styles.container}>
        <TextInput
          placeholder = "Write a description..." multiline={true} numberOfLines={5}
          onChangeText = {onChange} 
        />
        
      </View>
      <TouchableOpacity onPress={() => (addNews(text, 'https://icon-library.com/images/null-icon/null-icon-3.jpg'))}>
          <Text>Add Topic</Text>
      </TouchableOpacity>
            
    </ScrollView>
    
    
  );
  };

  const styles = StyleSheet.create({
    btn: {
      backgroundColor: '#a193c7',
      padding: 20,
      margin: 5
    },
    container: {
      height: 100,
      backgroundColor: "#fff",
      padding: 10,
      margin: 10,
      flexDirection: 'column'
  },
  
  });


export { Post };

