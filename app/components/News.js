import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, navigate, Image } from "react-native";


const News = ({...props}) => {
    return (
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <Text style={styles.text}>Hello World</Text>
                <Image source={{uri:'https://randomuser.me/api/portraits/men/1.jpg'}} style = {styles.img} />
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        flexDirection: 'row'
    },
    img: {
        alignItems: 'flex-end',
        width: 100,
        height: 100
    },
    text: {
        justifyContent: 'flex-start',
        fontSize: 30
    }
});

export {News};