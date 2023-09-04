import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';

const QuestionScreen = () => {
  const [questions, setQuestions] = useState([{
    id: '1',
    question: 'Do you want additional coverage for natural disasters?'
  }, {
    id: '2',
    question: 'Do you want additional coverage for theft?'
  }, {
    id: '3',
    question: 'Do you want additional coverage for fire?'
  }, {
    id: '4',
    question: 'Do you want additional coverage for flood?'
  }]);

  const QuestionItem = ({
    item
  }) => <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{item.question}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Yes" onPress={() => {}} />
        <Button title="No" onPress={() => {}} />
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <FlatList data={questions} renderItem={QuestionItem} keyExtractor={item => item.id} />
      <View style={styles.footer}>
        <Button title="Previous" onPress={() => {}} />
        <Button title="Save" onPress={() => {}} />
        <Button title="Continue" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  questionContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  questionText: {
    fontSize: 16,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
export default QuestionScreen;