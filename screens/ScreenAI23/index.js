import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

const ScreenComponent = () => {
  const buttons = ["Medical questions", "Personal information", "Other coverage", "HHD information", "Benefits selection", "Payment & administration", "Agreement", "Producer Supplement", "Authorization", "Signature"];
  return <SafeAreaView style={styles.container}>
      <ImageBackground source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image}>
        <View style={styles.content}>
          {buttons.map((button, index) => <TouchableOpacity key={index} style={styles.button}>
              <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>)}
        </View>
      </ImageBackground>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
});
export default ScreenComponent;