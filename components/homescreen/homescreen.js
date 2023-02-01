import React, {useState, useEffect} from 'react'
import { FlatList, Text, View, StyleSheet, Alert } from 'react-native';
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

    const onEnd = () => {
        Alert.alert('You have reached to list end !');
    }

    return (
        <View style={styles.container}>
            <FlatList onEndReachedThreshold={0.5} onEndReached={onEnd} data={data} renderItem={({item, id})=><Card item={item} id={id}/>} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexGrow: 1,
        marginRight: 30,
        justifyContent: 'space-around',
    },
});

export default HomeScreen;