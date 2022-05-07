import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button
} from "react-native";

const AppNavigator = () => {
  const [text, setText] = useState("");
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.parent}>
          <TextInput
            style={styles.textInput}
            value={text}
            onChangeText={(value) => setText(value)}
          />
           
            <Button
              title={"reset"}
              color={"#FF7F50"}
              onPress={() =>setText("")}
            />
          {/* <TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => setText("")}
          >
            <Image
              style={styles.closeButton}
              source={require("../assets/past.png")}
            />
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  parent: {
    marginLeft: 25,
    marginRight: 25,
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    height: 40,
    width: "90%",
  },
  closeButton: {
    height: 16,
    width: 16,
    color: 'red'
  },
  closeButtonParent: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
});

export default AppNavigator;