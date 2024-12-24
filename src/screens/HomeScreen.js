import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import FeaturedProducts from '../components/FeaturedProducts';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Navbar />
      <SearchBar />
      <FeaturedProducts />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;