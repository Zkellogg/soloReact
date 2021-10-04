import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { connect } from "react-redux";
import Header from "../components/Header";
import colors from "../constants/colors";

const SpeakerLookup = ({ speakers, passCloseSLU }) => {
  return (
    <View>
      <Header />
      <Button title="Close" onPress={passCloseSLU} />
      <FlatList
        data={speakers}
        renderItem={({ item }) => (
          <View style={styles.viewDiv}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.titleAndCompany}>
              {item.title} {item.company}
            </Text>

            <Text style={styles.contact}>{item.linkedin}</Text>
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
  name: {
    textAlign: "center",
    fontSize: 22,
  },
  contact: {
    textAlign: "center",
  },
  titleAndCompany: {
    textAlign: "center",
    fontSize: 18,
  },
  info: {
    textAlign: "center",
  },
});

const mapStateToProps = (state) => {
  const { speakers } = state;
  return { speakers };
};

export default connect(mapStateToProps)(SpeakerLookup);
