import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, Button, TextInput, CheckBox, StyleSheet } from 'react-native';
const benefitsData = [{
  id: '1',
  benefit: 'Benefit 1',
  amount: 0
}, {
  id: '2',
  benefit: 'Benefit 2',
  amount: 0
}, {
  id: '3',
  benefit: 'Benefit 3',
  amount: 0
}];

const BenefitScreen = () => {
  const [benefits, setBenefits] = useState(benefitsData);
  const [total, setTotal] = useState(0);

  const handleAmountChange = (id, newAmount) => {
    const newBenefits = benefits.map(benefit => {
      if (benefit.id === id) {
        benefit.amount = Number(newAmount);
      }

      return benefit;
    });
    setBenefits(newBenefits);
    calculateTotal(newBenefits);
  };

  const calculateTotal = benefits => {
    const newTotal = benefits.reduce((acc, benefit) => acc + benefit.amount, 0);
    setTotal(newTotal);
  };

  return <SafeAreaView style={styles.container}>
      <FlatList data={benefits} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.benefitItem}>
            <CheckBox value={item.amount > 0} />
            <Text style={styles.benefitText}>{item.benefit}</Text>
            <TextInput style={styles.input} keyboardType="numeric" value={String(item.amount)} onChangeText={newAmount => handleAmountChange(item.id, newAmount)} />
          </View>} />
      <Text style={styles.totalText}>Total: {total}</Text>
      <Button title="Apply now" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  benefitText: {
    flex: 1,
    fontSize: 16
  },
  input: {
    width: 100,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  }
});
export default BenefitScreen;