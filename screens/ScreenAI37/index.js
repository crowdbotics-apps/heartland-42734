import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const TaskDetailsScreen = () => {
  const [details, setDetails] = useState('');
  const task = {
    title: 'Task Title',
    description: 'Task Description',
    requiredTime: '2 hours'
  };
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <Text style={styles.time}>{task.requiredTime}</Text>
      <TextInput style={styles.input} onChangeText={setDetails} value={details} placeholder="Details" />
      <Button title="Mark as completed" onPress={() => console.log('Task marked as completed')} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 18,
    marginBottom: 10
  },
  time: {
    fontSize: 16,
    marginBottom: 20
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  }
});
export default TaskDetailsScreen;