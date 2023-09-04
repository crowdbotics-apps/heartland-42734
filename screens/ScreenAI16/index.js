import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const notifications = [{
  id: '1',
  title: 'Notification 1',
  description: 'This is notification 1'
}, {
  id: '2',
  title: 'Notification 2',
  description: 'This is notification 2'
}, {
  id: '3',
  title: 'Notification 3',
  description: 'This is notification 3'
} // Add more notifications as needed
];

const NotificationScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.item}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={notifications} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  content: {
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    color: '#757575'
  }
});
export default NotificationScreen;