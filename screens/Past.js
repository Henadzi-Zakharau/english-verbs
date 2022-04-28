import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { Verbs } from "../components/Verbs";
import { verbsPastStatement } from "../components/verbsPastStatement";
import { verbsPastQestion } from "../components/verbsPastQuestion";
import { verbsPastDenial } from "../components/verbsPastDenial";

export default function Past() {
  const [textQuestion, setTextQuestion] = useState();
  const [textStatement, setTextStatement] = useState();
  const [textDenial, setTextDenial] = useState();
  const [colorQuestion, setColorQuestion] = useState("blue");
  const [colorStatement, setColorStatement] = useState("blue");
  const [colorDenial, setColorDenial] = useState("blue");

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
              borderWidth: 5,
              paddingLeft: 15,
              fontWeight: "bold",
              height: 50,
              marginBottom: 10,
            }}
            onChangeText={onChange}
            placeholder="введите вопрос"
          />
          <Button
            title="check answer"
            color="#1E90FF"
            onPress={() => loadVerb(textQuestion)}
          />
        </View>
        <Text style={styles.textStile}>Statement</Text>
        <View style={styles.viewStyle}>
          <TextInput
            style={{
              borderColor: colorStatement,
              borderWidth: 5,
              paddingLeft: 15,
              fontWeight: "bold",
              height: 50,
              marginBottom: 10,
            }}
            onChangeText={onChange2}
            placeholder="введите утверждение"
          />
          <Button
            title="check answer"
            color="#1E90FF"
            onPress={() => loadVerb2(textStatement)}
          />
        </View>
        <Text style={styles.textStile}>Denial</Text>
        <View style={styles.viewStyle}>
          <TextInput
            style={{
              borderColor: colorDenial,
              borderWidth: 5,
              paddingLeft: 15,
              fontWeight: "bold",
              height: 50,
              marginBottom: 10,
            }}
            onChangeText={onChange3}
            placeholder="введите отрицание"
          />
          <Button
            title="сheck answer"
            color="#1E90FF"
            onPress={() => loadVerb3(textDenial)}
          />
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
});
