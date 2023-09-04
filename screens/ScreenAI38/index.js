import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, Button, StyleSheet } from 'react-native';
const tasks = [{
  id: '1',
  dueDate: '2022-01-01',
  description: 'Task 1',
  assignedTo: 'John',
  completedOn: '2022-01-02'
}, {
  id: '2',
  dueDate: '2022-01-03',
  description: 'Task 2',
  assignedTo: 'Jane',
  completedOn: '2022-01-04'
} // Add more tasks as needed
];

const TaskScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.item}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.info}>
        <Text style={styles.text}>Due Date: {item.dueDate}</Text>
        <Text style={styles.text}>Description: {item.description}</Text>
        <Text style={styles.text}>Assigned To: {item.assignedTo}</Text>
        <Text style={styles.text}>Completed On: {item.completedOn}</Text>
        <Button title="Re-activate" onPress={() => {}} />
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={tasks} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  info: {
    flex: 1
  },
  text: {
    marginBottom: 5
  }
});
export default TaskScreen;