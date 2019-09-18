import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function main() {
  return (
    <View style={styles.container}>
      <Text>App Started!</Text>
    </View>
  );
}

export default main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
