import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';



function Card({item}) {

    const [data, setData] = useState([]);

    function fetchPokemonInfos(){
        fetch(item.url)
        .then(response => response.json())
        .then(pokemonInfos => setData(pokemonInfos.results));
    }

    useEffect(()=>{
        fetchPokemonInfos()
    },[])

    return (
        <View style={styles.wrapper}>
            <Image
            style={styles.image}
                source={{
                    uri:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
                }}
            />
            <Text data={data}>{item.name}</Text>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        padding: 24,
        backgroundColor: "#e5e5e5",
        marginVertical: 10,
        alignItems:"center",
        justifyContent:"center"
    },
    image: {
        width: 270,
        height: 230
    }
});

export default Card;