import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <MaterialCommunityIcons name="email" size={16} color="#333" />
          <Text style={styles.email}>hello@email.com</Text>
          <MaterialCommunityIcons name="phone" size={16} color="#333" />
          <Text style={styles.phone}>0800 022 2 022</Text>
        </View>
        <View style={styles.topBarRight}>
          <Text style={styles.topBarText}>Franchise Opportunities</Text>
          <Text style={[styles.topBarText, styles.helpLink]}>Help</Text>
          <Text style={[styles.topBarText, styles.feedbackLink]}>Feedback</Text>
        </View>
      </View>
      
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.crownLogo}
              source={require('../assets/images/logo.jpg')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.searchAndCart}>
            <View style={styles.searchBar}>
              <TextInput 
                style={styles.searchInput}
                placeholder="Search..."
              />
              <MaterialCommunityIcons name="magnify" size={20} color="#888" />
            </View>
            <TouchableOpacity style={styles.cartButton}>
              <MaterialCommunityIcons name="cart" size={24} color="#333" />
              <View style={styles.cartCount}>
                <Text style={styles.cartCountText}>1</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },  
  email: {
    marginLeft: 5,
    marginRight: 15,
    fontSize: 12,
  },
  phone: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  topBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBarText: {
    marginLeft: 15,
    fontSize: 12,
    color: '#333',
  },
  helpLink: {
    color: 'blue'
  },
  feedbackLink: {
    color: 'green'
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  crownLogo: {
    width: 170,
    height: 40,
    marginRight: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  searchAndCart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    height: 35,
    width: 150,
  },
  searchInput: {
    flex: 1,
    marginRight: 5,
    fontSize: 14,
  },
  cartButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
  },
  cartCount: {
    position: 'absolute',
    top: -8,
    right: -8, 
    backgroundColor: 'orange',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartCountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Header;