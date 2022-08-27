import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, navigate, Image } from "react-native";

const UserName = () => {
    return (
    <View style = {{flexDirection: 'column'}}>
        <Text style = {{fontWeight: '700', paddingLeft: 20, 
        fontSize: 20, paddingTop: 30}}>
          James Harden
        </Text>
        <Text style = {{fontWeight: '400', paddingLeft: 20}}>
          Title: Mr
        </Text>
    </View>
    );
}

export { UserName };