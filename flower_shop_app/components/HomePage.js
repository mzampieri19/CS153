import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput } from 'react-native';
import { ValueProvider, useValue } from './ValueContext';
import EmptyBox from './EmptyBox';


const HomePage = ({navigation}) => {
    const { currentValue, setCurrentValue } = useValue();

    return (
        <ScrollView contentContainerStyle = {styles.container}>
            <View style={styles.container}>  
                <Text style={styles.title}>Welcome to Leilyz's Flower Shop</Text>

                <Text style={styles.subtitle}>Information:</Text>
                <Text style={styles.text}>Contact: ______</Text>
                <Text style={styles.text}>Email: ______</Text>
                <Text style={styles.text}>Instagram: ______</Text>
                <Text style={styles.text}>Hours: ______</Text>

                <Text style={styles.subtitle}>Disclaimer:</Text>
                <Text style={styles.text}>Please place orders at minimum 1 week before desired delivery</Text>

                <EmptyBox height={20} />

                <Text style={styles.subtitle}>Log in to see your past orders</Text>

                <Text style={styles.text}>Username</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Enter your username'
                    onChangeText={(text) => {
                        setCurrentValue({ ...currentValue, username: text });
                    }}
                    value={currentValue.username}
                />

                <Text style={styles.text}>Password</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Enter your password'
                    secureTextEntry
                    onChangeText={(text) => {
                        setCurrentValue({ ...currentValue, password: text });
                    }}
                    value={currentValue.password}
                />
                
                <View style={styles.buttonsContainer}>
                     <Pressable
                         style={styles.button}
                         onPress={() => navigation.navigate('Services')}
                     >
                         <Text style={styles.buttonText}>LOG IN</Text>
                     </Pressable>
                </View>

            </View>
        </ScrollView>
    );
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        padding: 20,
    },
    title: {
        fontSize: 48,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 3,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
    },
});