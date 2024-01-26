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
            }}/>
        </Tab.Navigator>
    );
}

export default MyTabs;