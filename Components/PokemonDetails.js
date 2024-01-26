import axios from 'axios';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useEffect, useState} from "react";

export default function Details({route}) {

    const [data, setData] = useState([]);
    const {id} = route.params;
    const image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png';

    const url = 'https://pokeapi.co/api/v2/pokemon/' + id + '/';

    useEffect(() => {
        axios.get(url)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    function capitalizeFirstLetter(string) {
        if (string === undefined) {
            return;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);

    }


    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri: image}}/>
            <View style={styles.titleDiv}>
                <Text style={styles.title}>Nom du pokémon : {capitalizeFirstLetter(data.name)}</Text>
                <Text style={styles.title}>Taille : {data.height}</Text>
                <Text style={styles.title}>Poids : {data.weight}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 300,
        margin: 10,
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
        marginTop: 50,
        backgroundColor: '#cbc9c9',
    },
    header: {
        backgroundColor: '#ab0000',
        padding: 10,
        marginTop: 50,
    },
    titre: {
        color: '#fff',
        fontWeight: "bold",
        textAlign: 'center',
    },
    list: {
        padding: 20,
    },
    image: {
        width: 100,
        height: 100,
    },

});
