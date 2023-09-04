import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const PersonalDataScreen = () => {
  const [data, setData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890'
  });

  const handleSave = () => {
    console.log('Data saved');
  };

  const handlePrevious = () => {
    console.log('Go to previous screen');
  };

  const handleContinue = () => {
    console.log('Go to next screen');
  };

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Personal Data</Text>
      <TextInput style={styles.input} value={data.name} onChangeText={text => setData({ ...data,
      name: text
    })} />
      <TextInput style={styles.input} value={data.email} onChangeText={text => setData({ ...data,
      email: text
    })} />
      <TextInput style={styles.input} value={data.phone} onChangeText={text => setData({ ...data,
      phone: text
    })} />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} />
        <Button title="Previous" onPress={handlePrevious} />
        <Button title="Continue" onPress={handleContinue} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  }
});
export default PersonalDataScreen;