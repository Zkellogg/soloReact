import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const Login = (props) => {
  const [tempEmail, setTempEmail] = useState("");
  const tempEmailHandler = (tempText) => {
    setTempEmail(tempText);
  };
  const printEmail = () => {
    console.log(tempEmail);
  };
  return (
    <View style={styles.screen}>
      <Text>Login or Register Email</Text>
      <View style={styles.input}>
        <TextInput
          onChangeText={tempEmailHandler}
          placeholder="Email Address"
        />
      </View>
      <View>
        <Button
          title="Submit/Login"
          onPress={() => props.emailChange(tempEmail)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#d8e4bc",
    // justifyContent: 'center'
  },
  input: {
    color: "black",
    backgroundColor: "#bfc1c2",
    borderColor: "black",
    borderWidth: 1,
    height: 30,
    width: "75%",
    textAlign: "center",
  },
});

export default Login;
