import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

function Card({item}) {
    return (
        <View style={styles.wrapper}>
            <Text>{item.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 24,
        backgroundColor: "#eaeaea",
        margin:8
    },
});

export default Card;