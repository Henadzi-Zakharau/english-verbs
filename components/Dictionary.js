import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Verbs } from "./Verbs";

export default function Dictionary() {
  const nameVerb = Verbs.map((value) => {
    return value + ';' + "\n" ;
  });

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ScrollView>
      <Text style={styles.text}>{nameVerb} </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
 fontSize: 20,
 
  },
});
