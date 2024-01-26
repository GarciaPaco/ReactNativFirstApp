import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../Screens/Home";
import PokemonDetails from "../Components/PokemonDetails";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Settings from "../Pages/Settings";


const Stack = createNativeStackNavigator();

function Navigation() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Détails" component={PokemonDetails}/>
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Accueil" component={Navigation}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    );
}

export default MyTabs;