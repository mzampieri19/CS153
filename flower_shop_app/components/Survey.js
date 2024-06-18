import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const Survey = ({ route }) => {
  const { occasion } = route.params;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{occasion} Survey</Text>
      <Text style={styles.prompt}>Your Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <Text style={styles.prompt}>Your Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.prompt}>Your Message:</Text>
      <TextInput
        style={[styles.input, styles.messageInput]}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter your message"
        multiline
        numberOfLines={4}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {submitted && (
        <Text style={styles.submittedText}>
          Thank you for submitting the survey! We will get back to you soon.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  prompt: {
    fontSize: 18,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  messageInput: {
    height: 120,
    paddingTop: 10,
  },
  submittedText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#007BFF',
  },
});

export default Survey;
