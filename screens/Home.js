import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";
import EventMap from "../models/EventMap";

const Home = (props) => {
  const [viewMap, setViewMap] = useState(false);
  const openViewMap = () => {
    setViewMap(true);
  };
  const closeViewMap = () => {
    setViewMap(false);
  };

  return (
    <View style={styles.homePage}>
      <Modal visible={viewMap}>
        <EventMap passCloseButton={closeViewMap} />
      </Modal>
      <View style={styles.divOne}>
        <View style={styles.eventMap}>
          <Button title="Event Map" onPress={openViewMap} />
        </View>
        <View style={styles.boothLookup}>
          <Button title="Booth Lookup" />
        </View>
      </View>
      <View style={styles.divTwo}>
        <View style={styles.speakerLookup}>
          <Button title="Speaker Lookup" />
        </View>
        <View style={styles.fullSchedule}>
          <Button title="Full Schedule" />
        </View>
      </View>
      <View style={styles.divThree}>
        <View style={styles.myProfile}>
          <Button title="My Profile" />
        </View>
        <View style={styles.settings}>
          <Button title="Settings" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#d8e4bc",
    //justifyContent: "center",
    alignItems: "center",
  },
  divOne: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    //backgroundColor: "orange",
    padding: 20,
  },
  divTwo: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    //backgroundColor: "orange",
    padding: 20,
  },
  divThree: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    //backgroundColor: "orange",
    padding: 20,
  },
  eventMap: {
    flex: 1,
    backgroundColor: "green",
    marginRight: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 8, height: 8 },
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
  boothLookup: {
    flex: 1,
    backgroundColor: "purple",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 8, height: 8 },
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
  speakerLookup: {
    flex: 1,
    backgroundColor: "green",
    marginRight: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 8, height: 8 },
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
  fullSchedule: {
    flex: 1,
    backgroundColor: "purple",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 8, height: 8 },
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
  myProfile: {
    flex: 1,
    backgroundColor: "green",
    marginRight: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 8, height: 8 },
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
  settings: {
    flex: 1,
    backgroundColor: "purple",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 8, height: 8 },
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
});

export default Home;
