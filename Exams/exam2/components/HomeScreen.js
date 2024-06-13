import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useValue } from './ValueContext';

function HomeScreen() {
    const { currentValue } = useValue();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home!</Text>
            <Text style={styles.text}>Username: {currentValue['username']}</Text>
            <Text style={styles.text}>Password: {currentValue['password']}</Text>
            <Text style={styles.text}>Status: {currentValue['admin']}</Text>
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

export default HomeScreen;