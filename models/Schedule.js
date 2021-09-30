import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import Header from "../components/Header";
import { connect } from "react-redux";

const Schedule = ({ schedule, passCloseSchedule }) => {
  let scheduleArr = [
    {
      key: "1",
      date: "day 1",
      time: "08:00",
      speaker: "name of speaker",
      info: "info about event/speaker",
    },
    {
      key: "2",
      date: "day 1",
      time: "09:00",
      speaker: "name of speaker",
      info: "info about event/speaker",
    },
    {
      key: "3",
      date: "day 2",
      time: "12:00",
      speaker: "name of speaker",
      info: "info about event/speaker",
    },
    {
      key: "4",
      date: "day 2",
      time: "13:00",
      speaker: "name of speaker",
      info: "info about event/speaker",
    },
  ];
  return (
    <View>
      <Header />
      <Button title="close" onPress={passCloseSchedule} />
      <FlatList
        data={schedule}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>Day: {item.day}</Text>
            <Text>Time: {item.time}</Text>
            <Text>Info: {item.info}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  const { schedule } = state;
  return { schedule };
};

export default connect(mapStateToProps)(Schedule);
