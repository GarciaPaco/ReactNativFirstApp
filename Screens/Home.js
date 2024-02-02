import axios from 'axios';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import {useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import PokemonCard from "../Components/PokemonCard";

export default function Home({navigation}) {
    const [data, setData] = useState([]);
    const [nextPage, setNextPage] = useState('');

    let listPokemon = axios.get('https://pokeapi.co/api/v2/pokemon/');
    useEffect(() => {
        listPokemon.then(function (response) {
            // console.log(response.data);
            setData(response.data);
            setNextPage(response.data.next)
        })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const fetchMoreData = () => {
        axios.get(nextPage)
            .then(function (response) {
                setData({
                    results: [...data.results, ...response.data.results],
                });
                setNextPage(response.data.next)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <SafeAreaView>

            <View>
                <FlatList
                    style={styles.list}
                    numColumns={3}
                    data={data.results}
                    renderItem={({item}) => <PokemonCard name={item.name} url={item.url} navigation={navigation}/>}
                    keyExtractor={item => item.name}
                    onEndReached={fetchMoreData}
                    onEndReachedThreshold={1}>
                </FlatList>
            </View>
            <StatusBar style="auto"/>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({

    header: {
        backgroundColor: '#ab0000',
        padding: 10,

    },
    titre: {
        color: '#fff',
        fontWeight: "bold",
        textAlign: 'center',
    },
    list: {
        padding: 20,
    },

});

