import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER</Text>
      <View style={styles.searchContainer}>
        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>3-Step Easy Search®</Text>
          <TouchableOpacity style={styles.serialButton}>
            <Text style={styles.serialButtonText}>Search by Serial Number</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="1. Printer Brand" />
          <TextInput style={styles.input} placeholder="2. Printer Series" />
          <TextInput style={styles.input} placeholder="3. Printer Model" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>FIND CARTRIDGES</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  serialButton: {
    backgroundColor: '#4285F4',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  serialButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  input: {
    width: '31%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    width: '100%',
    backgroundColor: '#FF9800',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SearchBar;