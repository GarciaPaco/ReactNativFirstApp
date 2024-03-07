import axios from 'axios';
import {StyleSheet, Text, View, Image, Button, SafeAreaView} from 'react-native';
import {useEffect, useState} from "react";
import {getData, storeData, removeData} from "../Utils/StorageService";

export default function Details({route}) {

    const [data, setData] = useState([]);
    const {id} = route.params;
    const image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/' + id + '.gif';
    const url = 'https://pokeapi.co/api/v2/pokemon/' + id + '/';
    const imageShiny = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`;

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


    function onPressAddToTeam() {
        getData('crew').then((crew) => {

        });
    }

    function onPressRemoveFromTeam() {

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
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
            <Button style={styles.button}
                    onPress={onPressAddToTeam}
                    title="Join the crew"
                    color="#841584"
                    accessibilityLabel="Add the pokemon to your crew"
            />
            {/*           <Button style={styles.button}
        onPress={onPressRemoveFromTeam}
        title="Remove from the crew"
        color="#841584"
        accessibilityLabel="Remove the pokemon from your crew"
    />*/}
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
    }


});
