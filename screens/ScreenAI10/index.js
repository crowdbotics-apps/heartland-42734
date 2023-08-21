import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const userName = "User's Full Name";
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome {userName}</Text>
        <Image style={styles.icon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Image style={styles.icon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <Button title="Account Management" />
      <Button title="Logout" />
      <View style={styles.section}>
        <Button title="Policy Overview" />
        <Button title="Claim Center" />
      </View>
      <View style={styles.section}>
        <Button title="Support and Preferences" />
        <Button title="Calendar" />
        <Button title="Payment" />
      </View>
      <View style={styles.footer}>
        <Button title="Home" />
        <Button title="Settings" />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  icon: {
    width: 30,
    height: 30
  },
  section: {
    marginVertical: 20
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto'
  }
});
export default ScreenComponent;