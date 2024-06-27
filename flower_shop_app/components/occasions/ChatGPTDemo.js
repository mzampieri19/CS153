import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { API_KEY } from '../Api-key';

const APIdemo = () => {
    const [data, setData] = useState([]);
    const [keywords, setKeywords] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to handle API request
    const getResponse = async () => {
        if (!keywords.trim()) {
            setError('Keywords cannot be empty.');
            return;
        }

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
            setData(result.choices);
            setError(null); // Clear any previous errors
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const ChatResponse = ({ message }) => (
        <View style={styles.responseContainer}>
            <Text style={styles.responseText}>Your Unique Bouquet:</Text>
            <Text style={styles.responseText}>{message.content}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Custom Bouquet Generator</Text>

            <TextInput
                style={styles.input}
                onChangeText={text => setKeywords(text)}
                value={keywords}
                placeholder="Enter keywords (e.g., roses, birthday)"
            />

            <Button
                onPress={getResponse}
                title={loading ? 'Thinking...' : 'Create Bouquet'}
                color="blue"
                disabled={loading}
                accessibilityLabel="Create Bouquet"
            />

            {loading && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />}

            {error && <Text style={styles.errorText}>{error}</Text>}

            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <ChatResponse message={item.message} />}
                style={{ marginTop: 20 }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '100%',
        maxWidth: 400,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    responseContainer: {
        backgroundColor: 'lightblue',
        marginVertical: 10,
        padding: 20,
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    responseText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        fontSize: 16,
    },
});

export default APIdemo;
