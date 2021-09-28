import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const EventMap = (props) => {
  return (
    <View style={styles.screen}>
      <Button title="Close" onPress={props.passCloseButton} />
      <Image
        style={styles.map}
        source={require("../images/IndoorAg_Oct2021_Floorplan.82521.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 75,
    flex: 1,
    alignItems: "center",
  },
  map: {
    height: 500,
    width: 300,
  },
});

export default EventMap;
