import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, navigate, Image } from "react-native";
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons';

const SettingComponent = ({ title, iconType }) => {
    return (
            <TouchableOpacity style={styles.container}>
                <MaterialCommunityIcon name={iconType} size={32} color="black"/>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: "#f8f8f8",
        borderBottomWidth: 1,
        borderColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        paddingLeft: 5
    }
});

export {SettingComponent};