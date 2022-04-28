import React from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';

export default function Library(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <View>
      <TextInput
            style={{
              borderColor: 'red',
              borderWidth: 7,
              paddingLeft: 15,
              fontWeight: "bold",
              height: 50,
              marginBottom: 5,
            }}
            
            fontSize={18}
            marginHorizontal={5}
            placeholder="введите вопрос"
          />
    </View>
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