import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text,TouchableOpacity } from 'react-native';

function SignUp({navigation}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    Alert.alert(
        "Sign Up Successful",
        "You have successfully signed up!",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate('Login'), 
          }
        ]
      );;
  };

  return (
    <View style={styles.container}>
        <View style={styles.topTag}>
            <Text style={styles.topTagText}>
                Hello!
            </Text>
            <Text style={styles.topTagText}>
                Ready To Explore ?
            </Text>
        </View>
    <View style={styles.containerMain}>
        <TextInput
            style={styles.input}
            placeholder="Full name"
            value={fullName}
            onChangeText={setFullName}
            placeholderTextColor="white"
        />
        <TextInput
            style={styles.input}
            placeholder="Email id"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="white"
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="white"
        />
    </View>
    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Create Account</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>You have an account ? Sign In</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4d20e3',
  },
  topTag: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
    },
    topTagText: {
        fontSize:30,
        color: 'white',
        marginTop:16
    },
  containerMain: {
    width: '100%',
    marginRight: 20,
    marginBottom: 40
  },
  input: {
    marginTop: 20,
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
  button: {
    alignItems: 'center', 
    backgroundColor: '#9341e0',
    padding: 10,
    width: '100%',
    borderRadius: 5, 
    marginBottom: 25
  },
  buttonText: {
    color: 'white',
  },
  link: {
    marginTop: 20,
    color: 'white',
  },
});

export default SignUp;
