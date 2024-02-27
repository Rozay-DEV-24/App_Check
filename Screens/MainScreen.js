import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph1}>Beautiful places to Book around you.</Text>
      <Text style={styles.paragraph2}>Choose your dream destination, arena and much more for your event.</Text>
      <View style={styles.subView}>
        <TouchableOpacity 
          style={[styles.button, styles.signUpButton]} 
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Sign Up for Free</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.otherButtons]} 
          onPress={() => {}}>
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.otherButtons]} 
          onPress={() => {}}>
          <Text style={styles.buttonText}>Continue with Apple</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '80%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d20e3',
  },
  paragraph1: {
    width: '70%',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  paragraph2: {
    width: '70%',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
    marginBottom: 50
  },
  subView: {
    width: '80%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: '#7D3C98', 
    width: '100%'
  },
  otherButtons: {
    marginTop: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: '100%'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    color: 'white',
  },
});
