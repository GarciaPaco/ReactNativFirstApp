import React, { useEffect, useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MonEquipe() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetchPokemons();
    }, []);

    const fetchPokemons = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const pokemonKeys = keys.filter(key => key.startsWith('pokemon_'));
            const pokemonPromises = pokemonKeys.map(key => AsyncStorage.getItem(key));
            const pokemonData = await Promise.all(pokemonPromises);
            const pokemons = pokemonData.map(data => JSON.parse(data));
            setPokemons(pokemons);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteCrew = async () => {
        try {
            await AsyncStorage.clear();
            setPokemons([]);
        } catch (error) {
            console.error(error);
        }
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mon crew de Pokémonstres</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {pokemons.map((pokemon, index) => (
                    <View style={styles.card} key={index}>
                        <Text style={styles.cardText}>{capitalizeFirstLetter(pokemon.name)}</Text>
                        <Image source={{ uri: pokemon.image }} style={{ width: 100, height: 100 }} />
                    </View>
                ))}
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Button color="purple" title="Delete the crew" onPress={deleteCrew} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 20,
    },
    buttonContainer: {
        width: '30%',
        marginBottom: 20,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    cardText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});