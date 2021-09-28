import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Image source={require("../images/IndoorAg_Logo_Horizontal_BW-1.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    //flex: 1,
    width: "100%",
    height: 90,
    paddingTop: 20,
    backgroundColor: "#95C04C",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});

export default Header;
