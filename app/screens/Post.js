import react, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";

const Post = () => {

  const [text, setText] = useState('');

  const onChange = (textValue) => setText(textValue);

  return (
    <>
    <TouchableOpacity style = {styles.container}>
      <TextInput
        placeholder = "Write a description..." multiline={true} numberOfLines={5}
      />
    </TouchableOpacity>

    <Button title="Upload Images" 

    />

    <Button title="Post" />
    </>
    
  );
  };

  const styles = StyleSheet.create({
    btn: {
      backgroundColor: '#a193c7',
      padding: 20,
      margin: 5
    },
    container: {
      height:100,
      
      justifyContent: "space-between",
      backgroundColor: "#fff",
      padding: 10,
      margin: 10,
      flexDirection: 'row'
  },
  
  });


export { Post };

