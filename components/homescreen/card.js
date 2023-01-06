import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

function Card() {
    return (
        <View style={styles.wrapper}>
            <Text>Home!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 24,
        backgroundColor: "#eaeaea"
    },
});

export default Card;