import axios from 'axios';
import {StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData, removeData, storeData } from '../Utils/StorageService';

export default function Details({route}) {
    const [isInCrew, setIsInCrew] = useState(false);
    const [data, setData] = useState([]);
    const {id} = route.params;
    const image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/' + id + '.gif';
    const url = 'https://pokeapi.co/api/v2/pokemon/' + id + '/';
    const imageShiny = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const storedPokemon = await getData(`pokemon_${id}`);
                setData(response.data);
                setIsInCrew(storedPokemon !== null);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    function capitalizeFirstLetter(string) {
        if (string === undefined) {
            return;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);

    }


    async function onPressAddToTeam() {
        try {
            const pokemonData = JSON.stringify({
                name: data.name,
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/' + id + '.gif',
            });

            await AsyncStorage.setItem(`pokemon_${id}`, pokemonData);
            const storedData = await AsyncStorage.getItem(`pokemon_${id}`);
            setIsInCrew(true);
        } catch (error) {
            console.error(error);
        }
    }

    async function onPressRemoveFromTeam() {
        try {
            await AsyncStorage.removeItem(`pokemon_${id}`);
            setIsInCrew(false);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.card}>
                {isInCrew ? (
                    <TouchableOpacity style={styles.button} onPress={onPressRemoveFromTeam}>
                        <Text style={styles.text}>Leave the crew</Text>
                        <Image
                            style={styles.openPokeball}
                            source={require('../assets/openpokeball.png')}
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.button} onPress={onPressAddToTeam}>
                        <Text style={styles.text}>Join the crew</Text>
                        <Image
                            style={styles.openPokeball}
                            source={require('../assets/openpokeball.png')}
                        />
                    </TouchableOpacity>
                )}
                <Image style={styles.image} source={{uri: image}}/>
                <View style={styles.titleDiv}>
                    <View style={styles.textDiv}>
                        <Text style={styles.title}>Name : {capitalizeFirstLetter(data.name)}</Text>
                        <Text style={styles.title}>Height : {data.height / 10} meters</Text>
                        <Text style={styles.title}>Weight : {data.weight / 10} KG</Text>
                        {data.types && (
                            <Text style={styles.title}>
                                Types: {data.types.map((type, index) => capitalizeFirstLetter(type.type.name)).join(', ')}
                            </Text>
                        )}
                        <Text style={styles.title && styles.shiny}>Shiny :</Text>
                        <Image style={styles.imageShiny} source={{uri: imageShiny}}/>

                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 350,
        height: 600,
        margin: 20,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    container: {
        backgroundColor: '#cbc9c9',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        textAlign: 'center',
    },
    titleDiv: {
        marginTop: 25,
        backgroundColor: '#d7d7d7',
        padding: 5,
        marginBottom: 15,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        width: 300,
        height: 200,
    },
    image: {
        width: 180,
        height: 180,
    },
    textDiv: {
        marginTop: 20,
    },
    imageShiny: {
        width: 150,
        height: 150,
        marginLeft: 70,
    },
    shiny: {
        marginTop: 10,
        fontWeight: "bold",
        textAlign: 'center',
    },
    button: {
        alignItems: 'center',
        padding: 10,
    },
    openPokeball: {
        width: 50,
        height: 50,
    },
    text: {
        color: '#841584',
    },


});
