import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useValue } from './ValueContext';

function SettingsScreen() {
    const { currentValue, setCurrentValue } = useValue();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <TextInput 
                style={styles.input}
                placeholder="Enter username"
                onChangeText={(text) => {
                    setCurrentValue({...currentValue, username: text});
                }}
            />
            <Text style={styles.text}>Username: {currentValue['username']}</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter password"
                onChangeText={(text) => {
                    setCurrentValue({...currentValue, password: text});
                }}
            />
            <Text style={styles.text}>Password: {currentValue['password']}</Text>
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
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '80%',
    },
});

export default SettingsScreen;
