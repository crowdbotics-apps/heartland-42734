import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Button, Linking } from 'react-native';

const AppInfoScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Log In" onPress={() => {}} />
        <Button title="About Us" onPress={() => {}} />
        <Button title="Send Feedback" onPress={() => {}} />
      </View>
      <View style={styles.linkContainer}>
        <Text style={styles.link} onPress={() => Linking.openURL('https://www.example.com/terms')}>
          Terms and Conditions
        </Text>
        <Text style={styles.link} onPress={() => Linking.openURL('https://www.example.com/privacy')}>
          Privacy Policy
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    width: '80%'
  },
  linkContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
});
export default AppInfoScreen;