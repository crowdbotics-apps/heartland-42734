import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, FlatList } from 'react-native';
const questions = [{
  id: '1',
  question: 'Question 1?'
}, {
  id: '2',
  question: 'Question 2?'
}, {
  id: '3',
  question: 'Question 3?'
}, {
  id: '4',
  question: 'Question 4?'
}, {
  id: '5',
  question: 'Question 5?'
}];

const QuestionScreen = () => {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (id, answer) => {
    setAnswers(prev => ({ ...prev,
      [id]: answer
    }));
  };

  return <SafeAreaView style={_styles.YXURkFny}>
      <FlatList data={questions} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.wYdgrxPc}>
            <Text style={_styles.ndzRwOlQ}>{item.question}</Text>
            <View style={_styles.GgTpUJre}>
              <Button title="Yes" onPress={() => handleAnswer(item.id, 'Yes')} />
              <Button title="No" onPress={() => handleAnswer(item.id, 'No')} />
            </View>
          </View>} />
      <View style={_styles.BrlJOuxC}>
        <Button title="Previous" onPress={() => {}} />
        <Button title="Save" onPress={() => {}} />
        <Button title="Continue" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default QuestionScreen;

const _styles = StyleSheet.create({
  YXURkFny: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  wYdgrxPc: {
    marginBottom: 20
  },
  ndzRwOlQ: {
    fontSize: 18
  },
  GgTpUJre: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  BrlJOuxC: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});