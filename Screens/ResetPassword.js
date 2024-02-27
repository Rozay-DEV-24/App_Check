// ResetPasswordModal.js
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ResetPassword = ({ isVisible, onClose }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    alert("Password reset successfully.");
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <View style={styles.forgotTextContainer}>
          <Text style={styles.forgotTextStyle}>Reset Password</Text>
        </View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}>
          <Text style={styles.textStyle}>Close</Text>
        </TouchableOpacity>
          <View style={styles.resetContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter New Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholderTextColor="white"
          />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
            <Text style={styles.textStyle}>Continue</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.textStyle}>Close</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  resetContainer: {
    width:'100%'
  },
  modalView: {
    margin: 20,
    backgroundColor: "#4d20e3",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    marginTop: 15,

  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width:'70%'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: 'white',
  },
  input: {
    height: 60,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    borderColor: 'black',
    color: 'white',
  },
  forgotTextStyle: {
    color: 'white',
    fontSize: 20,
  },
  forgotTextContainer: {
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  textStyle: {
    color: 'white',
    width: '100%',
    textAlign: 'left'
  },
});

export default ResetPassword;
