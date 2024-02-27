import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>        
        <View style={styles.mlbLogo}>
          <Text style={styles.title}>MLB</Text>
          <FontAwesome5  style={styles.mlbLogo1} name="circle-notch" size={40} color="red" />
        </View>
      </TouchableOpacity>
      <Text style={styles.subtitle}>Look. Book. Play</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d20e3',
  },
  mlbLogo: {
    flexDirection: 'row'
  },
  mlbLogo1: {
    marginTop: 15,
    marginLeft: 5
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 19,
    color: 'white',
  },
});
