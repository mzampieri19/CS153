import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';
import { useValue } from './background/ValueContext';


const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleOrders, setVisibleOrders] = useState(5);
  
  const server = 'https://d7c7-108-20-29-47.ngrok-free.app'

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${server}/orders`);
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

  const keyExtractor = (item, index) => {
    return item.id ? item.id.toString() : `order-${index}`;
  };

  const renderItem = ({ item }) => (
    <View style={styles.orderContainer} key={item.id ? item.id.toString() : `order-${item.username}-${item.date}`}>
      <Text style={styles.orderText}><Text style={styles.label}>Username:</Text> {item.username}</Text>
      <Text style={styles.orderText}><Text style={styles.label}>Date:</Text> {item.date}</Text>
      <Text style={styles.orderText}><Text style={styles.label}>Name:</Text> {item.name}</Text>
      <Text style={styles.orderText}><Text style={styles.label}>Email:</Text> {item.email}</Text>
      <Text style={styles.orderText}><Text style={styles.label}>Phone Number:</Text> {item.phone}</Text>
      <Text style={styles.orderText}><Text style={styles.label}>Occasion:</Text> {item.occasion}</Text>
      <Text style={styles.orderText}><Text style={styles.label}>Message:</Text> {item.message}</Text>
      <Text style={styles.orderText}><Text style={styles.label}>Quantity:</Text> {item.quantity}</Text>
      <Text style={styles.orderText}><Text style={styles.label}>Colors:</Text> {item.selectedColors?.join(', ') || 'N/A'}</Text>
      <Text style={styles.orderText}><Text style={styles.label}>Decorations:</Text> {item.selectedDecorations?.join(', ') || 'N/A'}</Text>
      <Text style={styles.orderText}><Text style={styles.label}>Wrapping:</Text> {item.selectedWrapping?.join(', ') || 'N/A'}</Text>
      <Text style={styles.orderText}><Text style={styles.label}>Generated Idea:</Text> {JSON.stringify(item.bouquet) || 'N/A'}</Text>
    </View>
  );

  const loadMoreOrders = () => {
    setVisibleOrders(prevVisibleOrders => prevVisibleOrders + 5);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Orders</Text>
      <FlatList
        data={orders.slice(0, visibleOrders)}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      {visibleOrders < orders.length && (
        <Button title="Load More" onPress={loadMoreOrders} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  orderContainer: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  orderText: {
    fontSize: 16,
    marginVertical: 2,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default AdminPage;