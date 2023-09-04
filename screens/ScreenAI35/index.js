import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [responseThread, setResponseThread] = useState([]);

  const handleSend = () => {
    setResponseThread([...responseThread, {
      category: selectedCategory,
      question
    }]);
    setQuestion('');
  };

  return <SafeAreaView style={styles.container}>
      <Picker selectedValue={selectedCategory} style={styles.picker} onValueChange={itemValue => setSelectedCategory(itemValue)}>
        <Picker.Item label="Category 1" value="cat1" />
        <Picker.Item label="Category 2" value="cat2" />
        <Picker.Item label="Category 3" value="cat3" />
      </Picker>
      <TextInput style={styles.input} onChangeText={setQuestion} value={question} placeholder="Enter your question" />
      <Button title="Send" onPress={handleSend} />
      <View style={styles.threadContainer}>
        {responseThread.map((item, index) => <View key={index} style={styles.threadItem}>
            <Text style={styles.threadText}>{item.category}</Text>
            <Text style={styles.threadText}>{item.question}</Text>
          </View>)}
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  },
  threadContainer: {
    marginTop: 20
  },
  threadItem: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  threadText: {
    fontSize: 16
  }
});
export default App;