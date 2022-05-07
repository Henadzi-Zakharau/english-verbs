import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import { verbsFutureQestion } from "../components/verbsFutureQestion";
import { verbsFutureStatement } from "../components/verbsFutureStatement";
import { verbsFutureDenial } from "../components/verbsFutureDenial";

export default function Future(props) {
  const [textQuestion, setTextQuestion] = useState();
  const [textStatement, setTextStatement] = useState();
  const [textDenial, setTextDenial] = useState();
  const [colorQuestion, setColorQuestion] = useState("#1E90FF");
  const [colorStatement, setColorStatement] = useState("#1E90FF");
  const [colorDenial, setColorDenial] = useState("#1E90FF");

  const { onPress, title = "сheck answer" } = props;

  function loadVerb(el) {
    if (verbsFutureQestion.includes(el) === true) {
      return setColorQuestion("green");
    } else {
      return setColorQuestion("red");
    }
  }

  function loadVerb2(el) {
    if (verbsFutureStatement.includes(el) === true) {
      return setColorStatement("green");
    } else {
      return setColorStatement("red");
    }
  }

  function loadVerb3(el) {
    if (verbsFutureDenial.includes(el) === true) {
      return setColorDenial("green");
    } else {
      return setColorDenial("red");
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textStile}>Question</Text>
        <View style={styles.viewStyle}>
          <TextInput
            style={{
              borderColor: colorQuestion,
              borderWidth: 7,
              paddingLeft: 15,
              fontWeight: "bold",
              height: 50,
              marginBottom: 5,
            }}
            value={textQuestion}
            onChangeText={(value) => setTextQuestion(value)}
            fontSize={18}
            marginHorizontal={5}
            placeholder="введите вопрос"
          />
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={styles.button}
              onPress={() => loadVerb(textQuestion)}
            >
              <Text style={styles.textButton}>{title}</Text>
            </Pressable>
            <Button
              title={"reset"}
              color={"#FF7F50"}
              onPress={() => setTextQuestion("")}
            />
          </View>
        </View>
        <Text style={styles.textStile}>Statement</Text>
        <View style={styles.viewStyle}>
          <TextInput
            style={{
              borderColor: colorStatement,
              borderWidth: 7,
              paddingLeft: 15,
              fontWeight: "bold",
              height: 50,
              marginBottom: 5,
            }}
            value={textStatement}
            onChangeText={(value) => setTextStatement(value)}
            fontSize={18}
            placeholder="введите утверждение"
          />
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={styles.button}
              onPress={() => loadVerb2(textStatement)}
            >
              <Text style={styles.textButton}>{title}</Text>
            </Pressable>
            <Button
              title={"reset"}
              color={"#FF7F50"}
              onPress={() => setTextStatement("")}
            />
          </View>
        </View>
        <Text style={styles.textStile}>Denial</Text>
        <View style={styles.viewStyle}>
          <TextInput
            style={{
              borderColor: colorDenial,
              borderWidth: 7,
              paddingLeft: 15,
              fontWeight: "bold",
              height: 50,
              marginBottom: 5,
            }}
            value={textDenial}
            onChangeText={(value) => setTextDenial(value)}
            fontSize={18}
            placeholder="введите отрицание"
          />
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={styles.button}
              onPress={() => loadVerb3(textDenial)}
            >
              <Text style={styles.textButton}>{title}</Text>
            </Pressable>
            <Button
              title={"reset"}
              color={"#FF7F50"}
              onPress={() => setTextDenial("")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  viewStyle: {
    margin: 5,
  },
  input: {
    height: 50,
    borderWidth: 5,

    padding: 5,
    color: "#000",
    fontSize: 18,
    justifyContent: "center",
  },
  textStile: {
    marginLeft: "35%",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 200,
    marginLeft: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#1E90FF",
    marginRight: 25,
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
