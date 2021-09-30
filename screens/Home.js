import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";
import BoothLookup from "../models/BoothLookup";
import SpeakerLookup from "../models/SpeakerLookup";
import EventMap from "../models/EventMap";
import Schedule from "../models/Schedule";
import { connect } from "react-redux";

const Home = (props) => {
  useEffect(() => {
    fetch("http://localhost:8080/allbooths")
      .then((response) => response.json())
      .then((booths) => {
        props.onBoothsLoaded(booths);
      });
    fetch("http://localhost:8080/allspeakers")
      .then((responce) => responce.json())
      .then((speakers) => {
        props.onSpeakersLoaded(speakers);
      });
    fetch("http://localhost:8080/getschedule")
      .then((responce) => responce.json())
      .then((schedule) => {
        props.onScheduleLoaded(schedule);
      });
  }, []);

  const [viewMap, setViewMap] = useState(false);
  const [viewBoothLookup, setViewBoothLookup] = useState(false);
  const [viewSpeakerLookup, setViewSpeakerLookup] = useState(false);
  const [viewSchedule, setViewSchedule] = useState(false);

  const openViewMap = () => {
    setViewMap(true);
  };
  const closeViewMap = () => {
    setViewMap(false);
  };
  const openBoothLookup = () => {
    setViewBoothLookup(true);
  };
  const closeBoothLookup = () => {
    setViewBoothLookup(false);
  };
  const openSpeakerLookup = () => {
    setViewSpeakerLookup(true);
  };
  const closeSpeakerLookup = () => {
    setViewSpeakerLookup(false);
  };
  const openSchedule = () => {
    setViewSchedule(true);
  };
  const closeSchedule = () => {
    setViewSchedule(false);
  };

  // console.log(props.booths);

  return (
    <View style={styles.homePage}>
      <Modal visible={viewMap}>
        <EventMap passCloseButton={closeViewMap} />
      </Modal>
      <Modal visible={viewBoothLookup}>
        <BoothLookup passCloseBLU={closeBoothLookup} />
      </Modal>
      <Modal visible={viewSpeakerLookup}>
        <SpeakerLookup passCloseSLU={closeSpeakerLookup} />
      </Modal>
      <Modal visible={viewSchedule}>
        <Schedule passCloseSchedule={closeSchedule} />
      </Modal>
      <View style={styles.divOne}>
        <View style={styles.eventMap}>
          <Button title="Event Map" onPress={openViewMap} />
        </View>
        <View style={styles.boothLookup}>
          <Button title="Booth Lookup" onPress={openBoothLookup} />
        </View>
      </View>
      <View style={styles.divTwo}>
        <View style={styles.speakerLookup}>
          <Button title="Speaker Lookup" onPress={openSpeakerLookup} />
        </View>
        <View style={styles.fullSchedule}>
          <Button title="Full Schedule" onPress={openSchedule} />
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

// const mapStateToProps = (state) => {
//   const { booths } = state;
//   return { booths };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    onBoothsLoaded: (booths) =>
      dispatch({ type: "BOOTHSLOADED", payload: booths }),
    onSpeakersLoaded: (speakers) => {
      dispatch({ type: "SPEAKERSLOADED", payload: speakers });
    },
    onScheduleLoaded: (schedule) => {
      dispatch({ type: "SCHEDULELOADED", payload: schedule });
    },
  };
};

export default connect(null, mapDispatchToProps)(Home);
