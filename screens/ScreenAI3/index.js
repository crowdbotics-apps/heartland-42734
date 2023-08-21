import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image } from 'react-native';
import { Video } from 'expo-av';

const AppInfoScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>About the App</Text>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.text}>
        This is a modern application designed for modern smartphones. It is optimized for profile mode and provides a seamless user experience.
      </Text>
      <Text style={styles.title}>About the App Owner</Text>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.text}>
        The app owner is a dedicated and passionate developer who aims to provide the best user experience through this application.
      </Text>
      <Text style={styles.title}>App Demo</Text>
      <Video source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} rate={1.0} volume={1.0} isMuted={false} resizeMode="cover" shouldPlay style={styles.video} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 10
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 10
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200
  }
});
export default AppInfoScreen;