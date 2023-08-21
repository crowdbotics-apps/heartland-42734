import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, Text, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');
  const senderEmail = 'sender@example.com';

  const handleSend = () => {
    alert(`Feedback sent: ${feedback}`);
    setFeedback('');
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.emailText}>Sender: {senderEmail}</Text>
      <TextInput style={styles.input} placeholder="Your feedback" value={feedback} onChangeText={setFeedback} />
      <Button title="Send" onPress={handleSend} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  emailText: {
    fontSize: 18,
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5
  }
});
export default FeedbackScreen;