import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, FlatList, StyleSheet } from 'react-native';

const MedicalScreen = () => {
  const [answers, setAnswers] = useState({});
  const questions = ['Do you have any allergies?', 'Are you currently on any medication?', 'Do you have any chronic diseases?', 'Have you had any surgeries in the past?'];

  const handleAnswer = (question, answer) => {
    setAnswers(prev => ({ ...prev,
      [question]: answer
    }));
  };

  const renderItem = ({
    item
  }) => <View style={styles.item}>
      <Text style={styles.question}>{item}</Text>
      <View style={styles.buttons}>
        <Button title="Yes" onPress={() => handleAnswer(item, 'Yes')} />
        <Button title="No" onPress={() => handleAnswer(item, 'No')} />
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={questions} renderItem={renderItem} keyExtractor={item => item} />
      <View style={styles.footer}>
        <Button title="Save" onPress={() => console.log(answers)} />
        <Button title="Continue" onPress={() => console.log('Continue')} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  question: {
    fontSize: 18
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  }
});
export default MedicalScreen;