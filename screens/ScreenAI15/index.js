import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, FlatList, TouchableOpacity } from 'react-native';
const agents = [{
  id: '1',
  name: 'Agent 1'
}, {
  id: '2',
  name: 'Agent 2'
}, {
  id: '3',
  name: 'Agent 3'
} // Add more agents as needed
];

const Screen = () => {
  const renderItem = ({
    item
  }) => <View style={_styles.YNgQDHRy}>
      <TouchableOpacity onPress={() => console.log(`${item.name} clicked`)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
      <Button title="Statistics" onPress={() => console.log('Statistics clicked')} />
    </View>;

  return <SafeAreaView style={_styles.MbQacfZE}>
      <Image style={_styles.oZasuYBF} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Button title="Notification" onPress={() => console.log('Notification clicked')} />
      <Button title="Sales tools" onPress={() => console.log('Sales tools clicked')} />
      <Button title="Start a Quote" onPress={() => console.log('Start a Quote clicked')} />
      <Button title="Call the agency" onPress={() => console.log('Call the agency clicked')} />
      <Button title="Lead management" onPress={() => console.log('Lead management clicked')} />
      <Button title="Saved progress" onPress={() => console.log('Saved progress clicked')} />
      <Button title="Support and performance" onPress={() => console.log('Support and performance clicked')} />
      <Button title="Settings" onPress={() => console.log('Settings clicked')} />
      <FlatList data={agents} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

export default Screen;

const _styles = StyleSheet.create({
  YNgQDHRy: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
  },
  MbQacfZE: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  oZasuYBF: {
    width: 100,
    height: 100,
    marginBottom: 20
  }
});