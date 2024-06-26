import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const server = 'https://48d9-209-6-142-225.ngrok-free.app';
  const group = 'flower_shop_app';

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${server}/orders`); // Replace with your actual server endpoint
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.orderContainer}>
            <Text style={styles.orderText}>Username: {item.username}</Text>
            <Text style={styles.orderText}>Date: {item.date}</Text>
            <Text style={styles.orderText}>Name: {item.name}</Text>
            <Text style={styles.orderText}>Email: {item.email}</Text>
            <Text style={styles.orderText}>Phone Number: {item.phone}</Text>
            <Text style={styles.orderText}>Occasion: {item.occasion}</Text>
            <Text style={styles.orderText}>Message: {item.message}</Text>
            <Text style={styles.orderText}>Quantity: {item.quantity}</Text>
            <Text style={styles.orderText}>Colors: {item.selectedColors.join(', ')}</Text>
            <Text style={styles.orderText}>Decorations: {item.selectedDecorations.join(', ')}</Text>
            <Text style={styles.orderText}>Wrapping: {item.selectedWrapping.join(', ')}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  orderText: {
    fontSize: 16,
  },
});

export default AdminPage;
