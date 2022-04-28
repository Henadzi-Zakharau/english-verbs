import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  Pressable
} from "react-native";
import { Verbs } from "../components/Verbs";
import { verbsPastStatement } from "../components/verbsPastStatement";
import { verbsPastQestion } from "../components/verbsPastQuestion";
import { verbsPastDenial } from "../components/verbsPastDenial";

export default function Past(props) {
  const [textQuestion, setTextQuestion] = useState();
  const [textStatement, setTextStatement] = useState();
  const [textDenial, setTextDenial] = useState();
  const [colorQuestion, setColorQuestion] = useState("blue");
  const [colorStatement, setColorStatement] = useState("blue");
  const [colorDenial, setColorDenial] = useState("blue");

  const { onPress, title = "сheck answer" } = props;

  const dictions = Verbs.map((elem) => {
    return elem + ";" + "\n";
  });

  //console.log()

  const onChange = (text) => {
    setTextQuestion(text);
  };
  const onChange2 = (text) => {
    setTextStatement(text);
  };
  const onChange3 = (text) => {
    setTextDenial(text);
  };

  function loadVerb(el) {
    if (verbsPastQestion.includes(el) === true) {
      return setColorQuestion("green");
    } else {
      return setColorQuestion("red");
    }
  }

  function loadVerb2(el) {
    if (verbsPastStatement.includes(el) === true) {
      return setColorStatement("green");
    } else {
      return setColorStatement("red");
    }
  }

  function loadVerb3(el) {
    if (verbsPastDenial.includes(el) === true) {
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
            onChangeText={onChange}
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
              onPress={() => textRes()}
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
            onChangeText={onChange2}
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
              onPress={() => textRes()}
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
            onChangeText={onChange3}
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
              onPress={() => textRes()}
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