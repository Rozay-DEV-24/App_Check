import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import ResetPassword from './ResetPassword';

const ForgotPassword = ({ modalVisible, setModalVisible }) => {
    
  const [resetModalVisible, setResetModalVisible] = useState(false);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalView}>
        <View style={styles.forgotTextContainer}>
          <Text style={styles.forgotTextStyle}>Forgot Password</Text>
        </View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.textStyle}>Close</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          Enter your registered email id for verification. We will share the verification code on your email.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email here"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter verification code"
          placeholderTextColor="white" 
        />
        <TouchableOpacity onPress={() => setResetModalVisible(true)}>
            <Text style={styles.linkText}>Reset Password</Text>
        </TouchableOpacity>
        {resetModalVisible && <View style={styles.backdrop} />}
        <ResetPassword
            isVisible={resetModalVisible}
            onClose={() => setResetModalVisible(false)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  linkText: {
    margin: 20,
    color: 'white',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  textStyle: {
    color: 'white', 
    marginBottom: 40,
    width: '100%',
    textAlign: 'left'
  },
  input: {
    marginTop: 30,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    backgroundColor: '#8524e0',
    borderRadius: 5,
    borderColor: 'white',
    color: 'white',
  },
  forgotTextStyle: {
    color: 'white',
    fontSize: 20,
  },
  forgotTextContainer: {
    marginBottom: 40,
    alignSelf: 'flex-start',
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

export default ForgotPassword;
