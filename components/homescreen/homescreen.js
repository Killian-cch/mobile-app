import React from 'react'
import { Text, View } from 'react-native';
import Card from "./card.js";

function fetchKantoPokemon(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then(allpokemon => console.log(allpokemon));
}

let pokemons = fetchKantoPokemon();

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Card />
        </View>
    );
}





export default HomeScreen;