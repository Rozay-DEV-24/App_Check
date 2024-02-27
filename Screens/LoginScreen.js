import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert,Modal  } from 'react-native';
import ForgotPassword from './ForgotPassword';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    if (username === 'Admin' && password === 'Admin') {
      Alert.alert("Login Successful", "You are logged in.");
    } else {
      Alert.alert("Login Failed", "Username or password is incorrect.");
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.topTag}>
            <Text style={styles.topTagText}>
                Hello!
            </Text>
            <Text style={styles.topTagText}>
                Welcome Back
            </Text>
        </View>
      <TextInput
        style={styles.inputLogin}
        placeholder="Email Address"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="white" 
      />
      <TextInput
        style={styles.inputLogin}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="white" 
      />
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>You don’t an have account? Sign Up</Text>
      </TouchableOpacity>
      {modalVisible && <View style={styles.backdrop} />}
      <ForgotPassword modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#4d20e3'
    },
    topTag: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },
    topTagText: {
        fontSize:30,
        color: 'white',
    },
    inputLogin: {
        marginTop: 30,
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        backgroundColor: 'black',
        borderRadius: 5,
        borderColor: 'black',
        color: 'white',
      },
    forgotPassword: {
      margin: 10,
      color: 'white',
      marginLeft: '60%'
    },    
    button: {
      alignItems: 'center',
      backgroundColor: '#9341e0',
      padding: 10,
      width: '100%',
      marginVertical: 10,
      borderRadius: 5, 
      marginBottom: 25
    },
    buttonText: {
      color: 'white',
    },
    modalView: {
      position: 'absolute',
      bottom: 0, 
      width: '100%',
      height: '60%',
      backgroundColor: '#8524e0',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backdrop: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  });
  
