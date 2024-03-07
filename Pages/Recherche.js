import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";

export default function Recherche() {
    const [searchTerm, setSearchTerm] = useState("");
    const [pokemonData, setPokemonData] = useState(null);

    const handleSearchInputChange = (input) => {
        setSearchTerm(input);
    };

    const handleSearchSubmit = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
            .then((response) => response.json())
            .then((data) => setPokemonData(data))
            .catch((error) => console.log(error));
    };

    return (
        <View style={styles.container}>
            <Text>Trouve ton pokemiaou</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleSearchInputChange}
                value={searchTerm}
                placeholder="Enter Pokemon Name"
            />
            <Button title="Search" onPress={handleSearchSubmit} />
            {pokemonData && (
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source={{ uri: pokemonData.sprites.front_default }}
                    />
                    <Text>{pokemonData.name}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        width: "80%",
        marginBottom: 10,
        padding: 10,
    },
    card: {
        marginTop: 20,
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
    },
});