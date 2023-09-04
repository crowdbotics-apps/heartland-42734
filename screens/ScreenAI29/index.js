import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, StyleSheet, Image } from 'react-native';

const BankDetailsScreen = () => {
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [routingNumber, setRoutingNumber] = useState('');
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} onChangeText={setBankName} value={bankName} placeholder="Bank Name" />
      <TextInput style={styles.input} onChangeText={setAccountNumber} value={accountNumber} placeholder="Account Number" keyboardType="numeric" />
      <TextInput style={styles.input} onChangeText={setRoutingNumber} value={routingNumber} placeholder="Routing Number" keyboardType="numeric" />
      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={() => {}} />
        <Button title="Save" onPress={() => {}} />
        <Button title="Continue" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  }
});
export default BankDetailsScreen;