import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "./components/Header";
import Login from "./screens/Login";
import Home from "./screens/Home";

export default function App() {
  const [email, setEmail] = useState("");
  const emailHandler = (emailText) => {
    setEmail(emailText);
  };

  let content = <Login emailChange={emailHandler} />;

  if (email) {
    content = <Home />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Indoor Ag Con" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
