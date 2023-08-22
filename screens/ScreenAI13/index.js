import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TextInput, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'User 1',
  lastMessageTime: '10:00 AM'
}, {
  id: '2',
  name: 'User 2',
  lastMessageTime: '9:30 AM'
}, {
  id: '3',
  name: 'User 3',
  lastMessageTime: 'Yesterday'
} // Add more users as needed
];

const MessageScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profilePic} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.username}>Username</Text>
      </View>
      <TextInput style={styles.searchBar} placeholder="Search" />
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.messageBox}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>{item.lastMessageTime}</Text>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  searchBar: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF'
  },
  messageBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  time: {
    fontSize: 14,
    color: '#888888'
  }
});
export default MessageScreen;