import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';

const InsuranceReviewScreen = () => {
  const [comment, setComment] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = () => {
    if (selectedOption === '') {
      Alert.alert('Please select an option');
    } else {
      Alert.alert(`Policy sent for review: ${selectedOption}. Comment: ${comment}`);
    }
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Send Policy for Review?</Text>
      <View style={styles.radioButtons}>
        <TouchableOpacity style={styles.radioButton} onPress={() => setSelectedOption('Yes')}>
          <Text style={styles.radioButtonText}>{selectedOption === 'Yes' ? '✓ Yes' : 'O Yes'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radioButton} onPress={() => setSelectedOption('No')}>
          <Text style={styles.radioButtonText}>{selectedOption === 'No' ? '✓ No' : 'O No'}</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.input} onChangeText={setComment} value={comment} placeholder="Add a comment" multiline />
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  radioButtons: {
    flexDirection: 'row',
    marginBottom: 20
  },
  radioButton: {
    marginRight: 20
  },
  radioButtonText: {
    fontSize: 18
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10
  }
});
export default InsuranceReviewScreen;