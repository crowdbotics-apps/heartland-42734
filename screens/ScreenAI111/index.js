import React from 'react';
import { SafeAreaView, View, Image, Button, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => {}} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Appointment List" onPress={() => {}} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Direct message" onPress={() => {}} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Download policy related documents / FAQS" onPress={() => {}} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  buttonContainer: {
    width: '80%',
    margin: 10
  },
  imageContainer: {
    marginTop: 20
  },
  image: {
    width: 200,
    height: 200
  }
});
export default ScreenComponent;