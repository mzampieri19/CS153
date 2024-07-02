import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [comments, setComments] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);
  const [visibleOrders, setVisibleOrders] = useState(5);
  const [visibleComments, setVisibleComments] = useState(5);

  const server = 'https://flower-server-spu1.onrender.com';

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${server}/room?id=orders`);
        const data = response.data;
        const ordersArray = data[""] ? [data[""]] : [];
        console.log('Orders fetched:', ordersArray);
        setOrders(ordersArray);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoadingOrders(false);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(`${server}/room?id=comments`);
        const data = response.data;
        const commentsArray = data[""] ? [data[""]] : [];
        console.log('Comments fetched:', commentsArray);
        setComments(commentsArray);
      } catch (error) {
        console.error('Error fetching comments:', error);
      } finally {
        setLoadingComments(false);
      }
    };

    fetchOrders();
    fetchComments();
  }, []);

  if (loadingOrders || loadingComments) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const keyExtractorOrders = (item, index) => item.id ? item.id.toString() : `order-${index}`;
  const keyExtractorComments = (item, index) => item.id ? item.id.toString() : `comment-${index}`;

  const renderOrder = ({ item }) => (
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

  const renderComment = ({ item }) => (
    <View style={styles.orderContainer} key={item.id ? item.id.toString() : `comment-${item.name}-${item.date}`}>
      <Text style={styles.orderText}><Text style={styles.label}>Name:</Text> {item.name}</Text>
      <Text style={styles.orderText}><Text style={styles.label}>Comment:</Text> {item.comment}</Text>
    </View>
  );

  const loadMoreOrders = () => setVisibleOrders(prev => prev + 5);
  const loadMoreComments = () => setVisibleComments(prev => prev + 5);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Orders</Text>
      {orders.length > 0 ? (
        <FlatList
          data={orders.slice(0, visibleOrders)}
          keyExtractor={keyExtractorOrders}
          renderItem={renderOrder}
        />
      ) : (
        <Text>No orders available</Text>
      )}
      {visibleOrders < orders.length && (
        <Button title="Load More" onPress={loadMoreOrders} />
      )}

      <Text style={styles.title}>All Comments</Text>
      {comments.length > 0 ? (
        <FlatList
          data={comments.slice(0, visibleComments)}
          keyExtractor={keyExtractorComments}
          renderItem={renderComment}
        />
      ) : (
        <Text>No comments available</Text>
      )}
      {visibleComments < comments.length && (
        <Button title="Load More" onPress={loadMoreComments} />
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
