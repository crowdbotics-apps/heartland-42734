import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Button } from 'react-native';

const AgentStatsScreen = () => {
  const agentStats = {
    name: 'Agent Smith',
    missionsCompleted: 50,
    successRate: '98%',
    lastMission: 'Yesterday'
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.profileName}>{agentStats.name}</Text>
      </View>
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Missions Completed: {agentStats.missionsCompleted}</Text>
        <Text style={styles.statsText}>Success Rate: {agentStats.successRate}</Text>
        <Text style={styles.statsText}>Last Mission: {agentStats.lastMission}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Download" onPress={() => {}} />
        <Button title="Invite Agent" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  statsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statsText: {
    fontSize: 18,
    marginVertical: 5
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
export default AgentStatsScreen;