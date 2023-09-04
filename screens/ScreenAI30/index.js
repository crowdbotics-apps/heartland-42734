import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, CheckBox, StyleSheet } from 'react-native';

const AgreementScreen = () => {
  const [isSelected, setSelection] = useState(false);
  return <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Agreement Text</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
        <Text style={styles.label}>I agree</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={() => {}} />
        <Button title="Save" onPress={() => {}} />
        <Button title="Continue" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  textContainer: {
    marginBottom: 20
  },
  text: {
    fontSize: 16
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  checkbox: {
    alignSelf: 'center'
  },
  label: {
    margin: 8
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default AgreementScreen;