import react, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Header } from "../components/Header";

const Agree = () => {
  const [countAgree, setcountAgree] = useState(0);
  const [countNeutral, setcountNeutral] = useState(0);
  const [countDisagree, setcountDisagree] = useState(0);

  return (
    <>
    <View style={{flexDirection: 'column'}}>
      <Header title="Should abortion be legal?"/>
      <Image source={{uri: 'https://cdn.cfr.org/sites/default/files/styles/open_graph/public/image/2022/06/Abortion.jpg'}} style = {styles.img}/>
    </View>
    <View style={styles.buttons}>
      <Pressable style={styles.btnA} onPress={() => 
        setcountAgree(countAgree+1)}>
        <Text>Agree</Text>
      </Pressable>
      <Pressable style={styles.btnN} onPress={() => 
        setcountNeutral(countNeutral+1)}>
        <Text>Neutral</Text>
      </Pressable>
      <Pressable style={styles.btnD} onPress={() => 
        setcountDisagree(countDisagree+1)}>
        <Text>Disagree</Text>
      </Pressable>
    </View>
    <Text>{countAgree+countNeutral+countDisagree}</Text>

    </>
  )
};
export { Agree };

const styles = StyleSheet.create({
  img: {
    width: 600,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10
  },
  btnA: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#00d5ff',
    paddingVertical: 20,
    borderRadius: 10
  },
  btnN: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#d6d6d2',
    paddingVertical: 20,
    borderRadius: 10
  },
  btnD: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#f70c0c',
    paddingVertical: 20,
    borderRadius: 10
  },
  buttons: {
    flexDirection:'row',
    padding:10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


// { navigation, route, ...props }