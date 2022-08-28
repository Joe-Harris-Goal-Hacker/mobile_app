import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style = {styles.text}>{props.title}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    header: {
      height: 80,
      padding: 15,
      backgroundColor: '#a9e7f5'
    },
      
      text: {
          justifyContent: 'center',
          fontSize: 30,
          alignItems: 'center'
      }
  
  });

  export { Header };