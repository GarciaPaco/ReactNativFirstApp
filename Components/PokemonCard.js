import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";


export default function PokemonCard({name, url, navigation}) {
    const id = url.split('/')[url.split('/').length - 2];
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <TouchableOpacity style={styles.button} title="Go to Details" onPress={() => navigation.navigate('Détails', {id: id})}>
            <View style={styles.card}>
                <Image style={styles.image} source={{uri: image}}/>
                <View style={styles.titleDiv}>
                    <Text style={styles.title}>{name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 100,
        height: 120,
        margin: 10,
        marginTop: 20,
        marginLeft: 13,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#fff',

    },
    image: {
        width: 100,
        height: 100,
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'capitalize',
    },
    titleDiv: {
        backgroundColor: '#c40202',
        padding: 5,
        borderRadius: 10,
    }
})