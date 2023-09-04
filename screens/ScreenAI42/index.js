import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const IncomingCallScreen = () => {
  const caller = {
    name: 'John Doe',
    image: 'https://tinyurl.com/42evm3m3'
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.callerInfoContainer}>
        <Image source={{
        uri: caller.image
      }} style={styles.callerImage} />
        <Text style={styles.callerName}>{caller.name}</Text>
        <Text style={styles.callStatus}>Incoming Call...</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.declineButton}>
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  callerInfoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  callerImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
  },
  callerName: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 10
  },
  callStatus: {
    fontSize: 20,
    color: '#bbb'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 50,
    marginBottom: 50
  },
  acceptButton: {
    backgroundColor: '#0f0',
    padding: 20,
    borderRadius: 30
  },
  declineButton: {
    backgroundColor: '#f00',
    padding: 20,
    borderRadius: 30
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  }
});
export default IncomingCallScreen;