import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, StyleSheet, Image, Text } from 'react-native';

const TwoFactorAuthScreen = () => {
  const [token, setToken] = useState('');

  const handleTokenSubmit = () => {// Handle token submission
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Two Factor Authentication</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={setToken} value={token} placeholder="Enter your token" keyboardType="numeric" />
        <Button title="Submit" onPress={handleTokenSubmit} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },
  inputContainer: {
    flex: 2,
    padding: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  }
});
export default TwoFactorAuthScreen;