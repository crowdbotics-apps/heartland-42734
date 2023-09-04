import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CallScreen = () => {
  const dummyData = {
    name: 'John Doe',
    phoneNumber: '+1 234 567 890'
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.callerInfo}>
        <Image style={styles.callerImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.callerName}>{dummyData.name}</Text>
        <Text style={styles.callerNumber}>{dummyData.phoneNumber}</Text>
      </View>
      <View style={styles.callActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Mute</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Keypad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Speaker</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.endCallButton}>
        <Text style={styles.endCallText}>End Call</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  callerInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  callerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  callerName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  callerNumber: {
    fontSize: 18,
    color: '#888'
  },
  callActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 50
  },
  actionButton: {
    padding: 20,
    backgroundColor: '#ddd',
    borderRadius: 10
  },
  actionText: {
    fontSize: 16,
    color: '#333'
  },
  endCallButton: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 10
  },
  endCallText: {
    fontSize: 16,
    color: '#fff'
  }
});
export default CallScreen;