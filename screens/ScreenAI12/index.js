import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';

const DirectMessageScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{
    id: '1',
    text: 'Hello!'
  }, {
    id: '2',
    text: 'How are you?'
  }]);

  const sendMessage = () => {
    if (message.length > 0) {
      setMessages([...messages, {
        id: Date.now().toString(),
        text: message
      }]);
      setMessage('');
    }
  };

  return <SafeAreaView style={styles.container}>
      <FlatList data={messages} keyExtractor={item => item.id} renderItem={({
      item
    }) => <Text style={styles.message}>{item.text}</Text>} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={message} onChangeText={setMessage} placeholder="Type your message here..." />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  inputContainer: {
    flexDirection: 'row',
    margin: 10
  },
  input: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10
  },
  message: {
    fontSize: 18,
    margin: 10
  }
});
export default DirectMessageScreen;