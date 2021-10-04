import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import Header from "../components/Header";
import { connect } from "react-redux";
import colors from "../constants/colors";

const Schedule = ({ schedule, passCloseSchedule }) => {
  return (
    <View>
      <Header />
      <Button title="close" onPress={passCloseSchedule} />
      <FlatList
        data={schedule}
        renderItem={({ item }) => (
          <View style={styles.viewDiv}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.dayTime}>
              {item.day} | {item.time}
            </Text>
            <Text style={styles.info}>{item.info}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewDiv: {
    backgroundColor: colors.liColor,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
  },
  dayTime: {
    textAlign: "center",
    fontSize: 18,
  },
  info: {
    textAlign: "center",
  },
});

const mapStateToProps = (state) => {
  const { schedule } = state;
  return { schedule };
};

export default connect(mapStateToProps)(Schedule);
