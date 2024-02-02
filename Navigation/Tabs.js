import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../Screens/Home";
import PokemonDetails from "../Components/PokemonDetails";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Settings from "../Pages/Settings";
import MonEquipe from "../Pages/MonEquipe";
import PokedexIcon from "../assets/pokedex.png";
import {Image} from "react-native";
import ParamsIcon from "../assets/settings.png";
import MonEquipeIcon from "../assets/pokeball.png";


const Stack = createNativeStackNavigator();

function Navigation() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Détails" component={PokemonDetails}/>
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Accueil" component={Navigation} options={{
                title: 'Pokedex', // Set the title
                headerStyle: {
                    backgroundColor: '#ab0000',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                tabBarIcon: () => (
                    <Image source={PokedexIcon} style={{width: 20, height: 20}}/>
                ),
            }}/>
            <Tab.Screen name={"Mon équipe"} component={MonEquipe} options={{
                title: 'Mon équipe',
                headerStyle: {
                    backgroundColor: '#ab0000',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                tabBarIcon: () => (
                    <Image source={MonEquipeIcon} style={{width: 20, height: 20}}/>
                ),
            }}/>
            <Tab.Screen name="Settings" component={Settings} options={{
                title: 'Paramètres',
                headerStyle: {
                    backgroundColor: '#ab0000',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                tabBarIcon: () => (
                    <Image source={ParamsIcon} style={{width: 20, height: 20}}/>
                ),
            }}/>
        </Tab.Navigator>
    );
}

export default MyTabs;