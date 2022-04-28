import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Library(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 100,
    marginLeft: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});