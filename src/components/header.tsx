import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Header(){
    const img = require('../../assets/academia.png');

    return (
        <View>
            <View style={styles.container}>
                <Image source={img} style={styles.image} />
                <Text style={styles.texto}> MAXWORK</Text>
            </View>
            <View style={styles.divisor} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center', 
        padding: 10,
        backgroundColor: 'black',
    },
    image: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginRight: 5, 
        tintColor: 'red',
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    divisor: {
        marginTop: 0,
        width: '100%',
        height: 1,
        backgroundColor: 'white',
    }
});