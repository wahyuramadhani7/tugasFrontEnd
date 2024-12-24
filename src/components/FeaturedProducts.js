import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductItem from './ProductItem';

const FeaturedProducts = () => {
  // Sample data, replace with your actual data
  const products = [
    { id: '1', name: 'Product 1', price: '$10', image: require('../assets/images/product1.jpg') },
    { id: '2', name: 'Product 2', price: '$20', image: require('../assets/images/product2.jpg') },
    { id: '3', name: 'Product 3', price: '$30', image: require('../assets/images/product3.jpg') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Products</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Menambahkan properti textAlign dengan nilai 'center'
  },
  list: {
    paddingHorizontal: 10,
  },
});

export default FeaturedProducts;