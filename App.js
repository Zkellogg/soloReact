import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "./components/Header";
import Home from "./screens/Home";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";

import appReducer from "./store/reducers/appReducer";

const store = createStore(appReducer);

function App(props) {
  // const [email, setEmail] = useState("");
  // const emailHandler = (emailText) => {
  //   setEmail(emailText);
  // };

  // let content = <Login emailChange={emailHandler} />;

  // if (email) {
  //   content = <Home />;
  // }

  return (
    <Provider store={store}>
      <View style={styles.screen}>
        <Header title="Indoor Ag Con" />
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
