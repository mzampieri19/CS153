import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, KeyboardAvoidingView, Platform, ScrollView, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import ChatGPTDemo from './ChatGPTDemo';
import { GPTresponse } from './ChatGPTDemo';

const Survey = () => {
  const route = useRoute();
  const { occasion, username } = route.params || {};
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [colorsEnabled, setColorsEnabled] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);
  const [decorationsEnabled, setDecorationsEnabled] = useState(false);
  const [selectedDecorations, setSelectedDecorations] = useState([]);
  const [wrappingEnabled, setWrappingEnabled] = useState(false);
  const [selectedWrapping, setSelectedWrapping] = useState([]);
  const [loggedResponse, setLoggedResponse] = useState(null);
  const server = 'https://3384-108-20-29-47.ngrok-free.app/orders';
  
  
  const handleSubmit = async () => {
    //Connects and logs username and date accessed to server 
    console.log('Logging data to server');
    setLoggedResponse(GPTresponse);

    const surveyData = {
      username, 
      occasion,
      date : new Date(),
      name,
      email,
      phone,
      message,
      quantity,
      selectedColors: colorsEnabled ? selectedColors : [],
      selectedDecorations: decorationsEnabled ? selectedDecorations : [],
      selectedWrapping: wrappingEnabled ? selectedWrapping : [],
      loggedResponse,
    };

    try {
      const response = await axios.post(server, surveyData);
      console.log('Order submitted successfully:', response.data);
      setSubmitted(true);
      Alert.alert('Order Submitted', 'Thank you for submitting your order!');
      // Reset form or navigate to a different screen
    } catch (error) {
      console.error('Error submitting order:', error);
      Alert.alert('Error', 'Failed to submit order. Please try again later.');
    }
    };


  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const toggleDecoration = (decoration) => {
    if (selectedDecorations.includes(decoration)) {
      setSelectedDecorations(selectedDecorations.filter(d => d !== decoration));
    } else {
      setSelectedDecorations([...selectedDecorations, decoration]);
    }
  };

  const toggleWrapping = (wrapping) => {
    if (selectedWrapping.includes(wrapping)) {
      setSelectedWrapping(selectedWrapping.filter(w => w !== wrapping));
    } else {
      setSelectedWrapping([...selectedWrapping, wrapping]);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>{occasion} Survey {username}</Text>
        <Text style={styles.prompt}>Your Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          accessibilityLabel="Name input field"
        />
        <Text style={styles.prompt}>Your Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          accessibilityLabel="Email input field"
        />
        <Text style={styles.prompt}>Your Phone Number:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone number"
          autoCapitalize="none"
          accessibilityLabel="Phone number input field"
        />
        <Text style={styles.title}>Bouquet Idea:</Text>
        <Text style={styles.text}>Can't think of specifics for your bouquet? Enter some keywords in the propt below and you will get a unique bouquet idea!</Text>
        <ChatGPTDemo />

        <Text style={styles.prompt}>Quantity of flowers: {quantity}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={4}
          value={quantity}
          onValueChange={(value) => setQuantity(value)}
          minimumTrackTintColor="#1fb28a"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#b9e4c9"
          accessibilityLabel="Quantity slider"
        />
        
        <View style={styles.toggleContainer}>
          <Text style={styles.prompt}>Would you like to select colors?</Text>
          <Switch
            value={colorsEnabled}
            onValueChange={setColorsEnabled}
          />
        </View>
        
        {colorsEnabled && (
          <View style={styles.optionsContainer}>
            <Text style={styles.prompt}>Choose your favorite colors:</Text>
            {['Red', 'Yellow', 'Pink', 'White', 'Purple'].map((color) => (
              <View key={color} style={styles.option}>
                <Text>{color}</Text>
                <Switch
                  value={selectedColors.includes(color)}
                  onValueChange={() => toggleColor(color)}
                />
              </View>
            ))}
          </View>
        )}

        <View style={styles.toggleContainer}>
          <Text style={styles.prompt}>Would you like to select decorations?</Text>
          <Switch
            value={decorationsEnabled}
            onValueChange={setDecorationsEnabled}
          />
        </View>
        {decorationsEnabled && (
          <View style={styles.optionsContainer}>
            <Text style={styles.prompt}>Choose the decorations:</Text>
            {['Butterfly', 'Ribbon', 'Hearts', 'Stuffed Animal', 'Note'].map((decoration) => (
              <View key={decoration} style={styles.option}>
                <Text>{decoration}</Text>
                <Switch
                  value={selectedDecorations.includes(decoration)}
                  onValueChange={() => toggleDecoration(decoration)}
                />
              </View>
            ))}
          </View>
        )}

        <View style={styles.toggleContainer}>
          <Text style={styles.prompt}>Would you like to select wrapping?</Text>
          <Switch
            value={wrappingEnabled}
            onValueChange={setWrappingEnabled}
          />
        </View>
        {wrappingEnabled && (
          <View style={styles.optionsContainer}>
            <Text style={styles.prompt}>Choose the wrapping:</Text>
            {['Red', 'Yellow', 'Pink', 'White', 'Purple'].map((wrapping) => (
              <View key={wrapping} style={styles.option}>
                <Text>{wrapping}</Text>
                <Switch
                  value={selectedWrapping.includes(wrapping)}
                  onValueChange={() => toggleWrapping(wrapping)}
                />
              </View>
            ))}
          </View>
        )}
      <Text style={styles.prompt}>Your Message:</Text>
        <TextInput
          style={[styles.input, styles.messageInput]}
          value={message}
          onChangeText={setMessage}
          placeholder="Enter a message to be reviewed by our team"
          multiline
          numberOfLines={4}
          accessibilityLabel="Message input field"
        />
        
        <Button title="Submit" onPress={handleSubmit} />
        {submitted && (
          <View style={styles.submittedContainer}>
            <Text style={styles.submittedText}>
              Thank you for submitting the survey! We will get back to you soon.
            </Text>
            <Text style={styles.submittedText}>Name: {name}</Text>
            <Text style={styles.submittedText}>Email: {email}</Text>
            <Text style={styles.submittedText}>Phone: {phone}</Text>
            <Text style={styles.submittedText}>Message: {message}</Text>
            <Text style={styles.submittedText}>Quantity: {quantity}</Text>
            {colorsEnabled && (
              <Text style={styles.submittedText}>Colors: {selectedColors.join(', ')}</Text>
            )}
            {decorationsEnabled && (
              <Text style={styles.submittedText}>Decorations: {selectedDecorations.join(', ')}</Text>
            )}
            {wrappingEnabled && (
              <Text style={styles.submittedText}>Wrapping: {selectedWrapping.join(', ')}</Text>
            )}
            <Text style={styles.submittedText}>Bouquet idea to be sent to team: {loggedResponse}</Text>
        </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
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
  scrollView: {
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  prompt: {
    fontSize: 18,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
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
  slider: {
    width: '100%',
    marginTop: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  optionsContainer: {
    width: '100%',
    marginTop: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  submittedContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
  },
  submittedText: {
    fontSize: 16,
    color: '#007BFF',
    marginTop: 5,
  },
});

export default Survey;
