import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';

const PolicyScreen = () => {
  return <SafeAreaView style={_styles.pDAnUoNK}>
      <ScrollView>
        <View style={_styles.upjPtjDr}>
          <Text style={_styles.hHYfhkJp}>Policy Overview</Text>
          <Text style={_styles.HNSfQLMh}>Policy Description</Text>
          <Text style={_styles.haCmHCWx}>Policy Number</Text>
          <Text style={_styles.ZaAJsvAk}>Coverage Details</Text>
          <Text style={_styles.togQYVZb}>Premium Amount</Text>
          <Text style={_styles.bkLtBgvz}>Renewal Date</Text>
        </View>

        <View style={_styles.PHwfLdFa}>
          <Text style={_styles.PAjVrIGs}>ID Cards</Text>
          <TouchableOpacity style={_styles.ENCIWwub}>
            <Text style={_styles.DDuDGlPD}>View Digital ID Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.ApBkwfSJ}>
            <Text style={_styles.MeZTRmNE}>Download ID Card</Text>
          </TouchableOpacity>
        </View>

        <View style={_styles.TSJWBFYF}>
          <Text style={_styles.swGFkmxZ}>Claim Center</Text>
          <TouchableOpacity style={_styles.BbtpxpBJ}>
            <Text style={_styles.BgvurVWg}>File for New Claim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.SpwljDat}>
            <Text style={_styles.jbgLxQXt}>List of All Claims</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.nfFKBAfb}>
            <Text style={_styles.BBJZizvJ}>Select Specific Claim</Text>
          </TouchableOpacity>
          <Text style={_styles.kSTVBCBR}>Claim Details</Text>
          <Text style={_styles.lUEVcPDk}>Status Update</Text>
        </View>

        <View style={_styles.ybPeiIja}>
          <Text style={_styles.ziXimVqh}>Support and Preference</Text>
          <Button title="Help or FAQ" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default PolicyScreen;

const _styles = StyleSheet.create({
  pDAnUoNK: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  upjPtjDr: {
    padding: 20
  },
  hHYfhkJp: {
    fontSize: 24,
    fontWeight: "bold"
  },
  HNSfQLMh: {
    fontSize: 18,
    marginTop: 10
  },
  haCmHCWx: {
    fontSize: 18,
    marginTop: 10
  },
  ZaAJsvAk: {
    fontSize: 18,
    marginTop: 10
  },
  togQYVZb: {
    fontSize: 18,
    marginTop: 10
  },
  bkLtBgvz: {
    fontSize: 18,
    marginTop: 10
  },
  PHwfLdFa: {
    padding: 20
  },
  PAjVrIGs: {
    fontSize: 24,
    fontWeight: "bold"
  },
  ENCIWwub: {
    marginTop: 10
  },
  DDuDGlPD: {
    fontSize: 18
  },
  ApBkwfSJ: {
    marginTop: 10
  },
  MeZTRmNE: {
    fontSize: 18
  },
  TSJWBFYF: {
    padding: 20
  },
  swGFkmxZ: {
    fontSize: 24,
    fontWeight: "bold"
  },
  BbtpxpBJ: {
    marginTop: 10
  },
  BgvurVWg: {
    fontSize: 18
  },
  SpwljDat: {
    marginTop: 10
  },
  jbgLxQXt: {
    fontSize: 18
  },
  nfFKBAfb: {
    marginTop: 10
  },
  BBJZizvJ: {
    fontSize: 18
  },
  kSTVBCBR: {
    fontSize: 18,
    marginTop: 10
  },
  lUEVcPDk: {
    fontSize: 18,
    marginTop: 10
  },
  ybPeiIja: {
    padding: 20
  },
  ziXimVqh: {
    fontSize: 24,
    fontWeight: "bold"
  }
});