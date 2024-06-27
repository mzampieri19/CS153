import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { API_KEY } from '../Api-key';
import { useValue } from '../background/ValueContext';

const APIdemo = () => {
    const [data, setData] = useState([]);
    const [keywords, setKeywords] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [loggedResponse, setLoggedResponse] = useState(null); // State to store logged response
    const { currentValue, setCurrentValue } = useValue();

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
                "messages": [{ "role": "user", "content": promptMessage }],
                "temperature": 0.7
            };

            const response = await axios.post(url, msg_data, config);
            const result = response.data;
            setCurrentValue({ ...currentValue, bouquet: result });
            setData(result.choices);
            setError(null); // Clear any previous errors
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Function to log the selected response
    const logResponse = (response) => {
        setLoggedResponse(response);
    };

    const ChatResponse = ({ message }) => (
        <View style={styles.responseContainer}>
            <Text style={styles.responseText}>Your Unique Bouquet:</Text>
            <Text style={styles.responseText}>{message.content}</Text>
            <Button
                onPress={() => logResponse(message.content)} // Log the response on button press
                title="Log Response"
                color="green"
                accessibilityLabel="Log Response"
            />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Custom Bouquet Generator</Text>

            <TextInput
                style={styles.input}
                onChangeText={text => setKeywords(text)}
                value={keywords}
                placeholder="Enter keywords"
                placeholderTextColor="gray"
            />

            <Button
                onPress={getResponse}
                title={loading ? 'Thinking...' : 'Create Bouquet!'}
                color="black"
                disabled={loading}
                accessibilityLabel="Create Bouquet"
            />

            {loading && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 0 }} />}

            {error && <Text style={styles.errorText}>{error}</Text>}

            <View style={styles.responsesContainer}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ChatResponse message={item.message} />}
                />

                {loggedResponse && (
                    <View style={styles.responseContainer}>
                        <Text style={styles.responseText}>Logged Response:</Text>
                        <Text style={styles.responseText}>{loggedResponse}</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: 'black',
    },
    input: {
        height: 40,
        width: '90%',
        maxWidth: 400,
        marginVertical: 0,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    responsesContainer: {
        flex: 1,
        width: '100%',
        marginTop: 0,
    },
    responseContainer: {
        marginVertical: 0,
        padding: 8,
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
    },
    responseText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 0,
        color : 'black',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        fontSize: 16,
    },
});

export default APIdemo;
