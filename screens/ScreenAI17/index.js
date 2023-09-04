import React from 'react';
import { SafeAreaView, StyleSheet, View, Button, ImageBackground } from 'react-native';

const App = () => {
  return <SafeAreaView style={styles.container}>
      <ImageBackground source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image}>
        <View style={styles.buttonContainer}>
          <Button title="Generate quotes" onPress={() => console.log('Generate quotes clicked')} color="#841584" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Select specific training material" onPress={() => console.log('Select specific training material clicked')} color="#841584" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Select a product from the knowledge base" onPress={() => console.log('Select a product from the knowledge base clicked')} color="#841584" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Help" onPress={() => console.log('Help clicked')} color="#841584" />
        </View>
      </ImageBackground>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20
  }
});
export default App;