import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TextInput, Button, FlatList, View, StyleSheet } from 'react-native';
import axios from 'axios';

// Constant API key
const API_KEY = "";

const APIdemo = () => {
    const [data, setData] = useState([]);
    const [keywords, setKeywords] = useState("");
    const [loading, setLoading] = useState(false);

    // Function to handle API request
    const getResponse = async () => {
        try {
            setLoading(true);
            const url = 'https://api.openai.com/v1/chat/completions';
            const config = {
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + API_KEY,
                },
            };
            const promptMessage = `Create a custom flower bouquet idea with the following keywords: ${keywords}`;
    
            const msg_data = {
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": promptMessage}],
                "temperature": 0.7
            };
    
            const response = await axios.post(url, msg_data, config);
            const result = response.data;
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle specific errors
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Server responded with:', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.error('Error setting up request:', error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const ChatResponse = ({ role, content }) => (
        <View style={styles.responseContainer}>
            <Text style={styles.responseText}>Your Unique Bouquet:</Text>
            <Text style={styles.responseText}>{content}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={text => setKeywords(text)}
                value={keywords}
            />

            <Button
                onPress={getResponse}
                title={loading ? 'Thinking...' : 'Create Bouquet'}
                color="blue"
                accessibilityLabel="Send"
            />

            <FlatList
                data={data.choices}
                keyExtractor={({ index }) => index}
                renderItem={({ item }) => (
                    <ChatResponse {...item.message} />
                )}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    responseContainer: {
        backgroundColor: 'lightblue',
        margin: 10,
        padding: 20,
        alignItems: 'center',
    },
    responseText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default APIdemo;
