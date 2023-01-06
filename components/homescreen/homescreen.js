import React, {useState, useEffect} from 'react'
import { FlatList, Text, View } from 'react-native';
import Card from "./card.js";

function HomeScreen() {

    const [data, setData] = useState([]);

    function fetchKantoPokemon(){
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(response => response.json())
        .then(allpokemon => setData(allpokemon.results));
    }

    useEffect(()=>{
        fetchKantoPokemon()
    },[])

    //let pokemons = fetchKantoPokemon();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList data={data} renderItem={({item})=><Card item={item}/>} />
            
        </View>
    );
}

export default HomeScreen;