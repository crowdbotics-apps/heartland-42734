import React from 'react';
import { SafeAreaView, View, Text, FlatList, Button, Image, StyleSheet } from 'react-native';
const emails = [{
  id: '1',
  subject: 'Hello',
  body: 'Just saying hello.'
}, {
  id: '2',
  subject: 'Meeting',
  body: 'Let\'s schedule a meeting.'
}, {
  id: '3',
  subject: 'Invoice',
  body: 'Please find the invoice attached.'
} // Add more emails here
];

const EmailScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sent Emails</Text>
        <Button title="Compose a new email" onPress={() => {}} />
      </View>
      <FlatList data={emails} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.emailItem}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <View style={styles.emailContent}>
              <Text style={styles.subject}>{item.subject}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  emailItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  emailContent: {
    flex: 1
  },
  subject: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  body: {
    fontSize: 14,
    color: '#666'
  }
});
export default EmailScreen;