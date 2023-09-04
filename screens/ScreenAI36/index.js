import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const PolicyDetailsScreen = () => {
  const policyDetails = {
    owner: 'John Doe',
    number: 'POL123456',
    coverage: ['Fire', 'Theft', 'Flood'],
    premium: '$1000',
    renewalDate: '2022-12-31',
    commission: '10%'
  };
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Policy Details</Text>
      <Text style={styles.text}>Owner: {policyDetails.owner}</Text>
      <Text style={styles.text}>Policy Number: {policyDetails.number}</Text>
      <Text style={styles.text}>Coverage: {policyDetails.coverage.join(', ')}</Text>
      <Text style={styles.text}>Premium: {policyDetails.premium}</Text>
      <Text style={styles.text}>Renewal Date: {policyDetails.renewalDate}</Text>
      <Text style={styles.text}>Commission: {policyDetails.commission}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Create an e-policy" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },
  buttonContainer: {
    marginTop: 20
  }
});
export default PolicyDetailsScreen;