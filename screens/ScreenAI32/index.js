import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, CheckBox, StyleSheet } from 'react-native';

const AuthScreen = () => {
  const [isSelected, setSelection] = useState(false);
  return <SafeAreaView style={styles.container}>
      <Text style={styles.authText}>
        This is the authorization text. Please read and agree to the terms and conditions.
      </Text>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
        <Text style={styles.label}>I agree</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={() => console.log('Previous button pressed')} />
        <Button title="Save" onPress={() => console.log('Save button pressed')} />
        <Button title="Continue" onPress={() => console.log('Continue button pressed')} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  authText: {
    fontSize: 16,
    marginBottom: 20
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
export default AuthScreen;