import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FA5Icon from "react-native-vector-icons/FontAwesome5";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Internal testing release. Only selected people.</Text>
      <FA5Icon
            name={"bug"}
            size={24}
            color={"#333333"}
            solid
        />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});