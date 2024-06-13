import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default AboutScreen;

