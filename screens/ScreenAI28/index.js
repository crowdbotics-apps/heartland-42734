import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, CheckBox, StyleSheet, Image } from 'react-native';

const BenefitSelectionScreen = () => {
  const [benefits, setBenefits] = useState([{
    id: 1,
    name: 'Benefit 1',
    selected: false
  }, {
    id: 2,
    name: 'Benefit 2',
    selected: true
  }, {
    id: 3,
    name: 'Benefit 3',
    selected: false
  }]);

  const toggleBenefit = id => {
    setBenefits(benefits.map(benefit => benefit.id === id ? { ...benefit,
      selected: !benefit.selected
    } : benefit));
  };

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Select Your Benefits</Text>
      {benefits.map(benefit => <View key={benefit.id} style={styles.benefit}>
          <CheckBox value={benefit.selected} onValueChange={() => toggleBenefit(benefit.id)} />
          <Text>{benefit.name}</Text>
        </View>)}
      <View style={styles.buttons}>
        <Button title="Previous" onPress={() => {}} />
        <Button title="Save" onPress={() => {}} />
        <Button title="Continue" onPress={() => {}} />
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
  benefit: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20
  }
});
export default BenefitSelectionScreen;