import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
const emails = [{
  id: '1',
  subject: 'Hello World',
  body: 'This is a test email',
  sender: 'test1@example.com'
}, {
  id: '2',
  subject: 'React Native',
  body: 'This is a React Native email',
  sender: 'test2@example.com'
}, {
  id: '3',
  subject: 'Hello Again',
  body: 'This is another test email',
  sender: 'test3@example.com'
}];

const EmailScreen = () => {
  const [search, setSearch] = useState('');

  const renderItem = ({
    item
  }) => <TouchableOpacity style={_styles.WwwAjCbn}>
      <Text style={_styles.ObTxvxvu}>{item.subject}</Text>
      <Text style={_styles.KxmEvyhy}>{item.sender}</Text>
      <Text numberOfLines={1}>{item.body}</Text>
    </TouchableOpacity>;

  return <SafeAreaView style={_styles.FXyZhtZj}>
      <View style={_styles.RUKYaMKk}>
        <TextInput style={_styles.YwvVXltx} onChangeText={text => setSearch(text)} value={search} placeholder="Search emails" />
      </View>
      <FlatList data={emails.filter(email => email.subject.includes(search))} renderItem={renderItem} keyExtractor={item => item.id} ListEmptyComponent={<Text>No emails found</Text>} />
    </SafeAreaView>;
};

export default EmailScreen;

const _styles = StyleSheet.create({
  WwwAjCbn: {
    padding: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  ObTxvxvu: {
    fontSize: 18,
    fontWeight: "bold"
  },
  KxmEvyhy: {
    color: "#888"
  },
  FXyZhtZj: {
    flex: 1,
    backgroundColor: "#fff"
  },
  RUKYaMKk: {
    padding: 20
  },
  YwvVXltx: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10
  }
});