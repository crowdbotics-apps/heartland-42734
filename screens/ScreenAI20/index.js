import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
const leadsData = [{
  id: '1',
  name: 'John Doe',
  email: 'john@example.com'
}, {
  id: '2',
  name: 'Jane Doe',
  email: 'jane@example.com'
}, {
  id: '3',
  name: 'Bob Smith',
  email: 'bob@example.com'
} // Add more leads as needed
];

const LeadItem = ({
  item
}) => <TouchableOpacity style={styles.leadItem}>
    <Image style={styles.leadImage} source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} />
    <View style={styles.leadInfo}>
      <Text style={styles.leadName}>{item.name}</Text>
      <Text style={styles.leadEmail}>{item.email}</Text>
    </View>
  </TouchableOpacity>;

const LeadsScreen = () => <SafeAreaView style={styles.container}>
    <FlatList data={leadsData} renderItem={LeadItem} keyExtractor={item => item.id} />
    <View style={styles.buttonContainer}>
      <Button title="Create a Quote" onPress={() => {}} />
    </View>
  </SafeAreaView>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  leadItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  leadImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  leadInfo: {
    justifyContent: 'center'
  },
  leadName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  leadEmail: {
    fontSize: 14,
    color: '#888'
  },
  buttonContainer: {
    padding: 10
  }
});
export default LeadsScreen;