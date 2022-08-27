import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, navigate, Image } from "react-native";
import politics from '../assets/politics.png';

const News = ({...props}) => {
    return (
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <View style={{flexDirection: 'column',flexWrap:"wrap"}}>
                    <Text style={styles.text}>Should abortion be legal?</Text>
                </View>
                <Image source={politics} style = {styles.img} />
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 10,
        margin: 3,
        flexDirection: 'row',
        borderWidth: 3,
        borderBottomEndRadius: 10,
        borderTopEndRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    img: {
        alignItems: 'flex-end',
        marginBottom:0,
        width:70,
        height: 70,
        borderBottomEndRadius: 10,
        borderTopEndRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    text: {
        justifyContent: 'flex-start',
        fontSize: 20,
        flexWrap:"wrap",
        width:250,
        fontWeight: '600'
    }
});

export {News};