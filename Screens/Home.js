import axios from 'axios';
import {StyleSheet, Text, View, FlatList,} from 'react-native';
import {useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";


export default function Home() {
const [data, setData] = useState([]);

    let listPokemon = axios.get('https://pokeapi.co/api/v2/pokemon/');
    useEffect(() => {
        listPokemon.then(function (response) {
            // console.log(response.data);
            setData(response.data);
        })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <View>
            <View  style={styles.header}>
            <Text style={styles.titre}>Pokedex</Text>
            </View>
            <View>
            <FlatList
                      style={styles.list}
                      numColumns={3}
                      data={data.results}
                      renderItem={({item}) => <Text title={item.name}>{item.name}</Text>}
                      keyExtractor={item => item.name}>
            </FlatList>
            </View>
            <StatusBar style="auto"/>
        </View>

    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ab0000',
        padding: 10,
        marginTop: 50,

    },
    titre: {
        color: '#fff',
        fontWeight: "bold"
    },
    list: {

    },
});

