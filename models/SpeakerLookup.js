import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { connect } from "react-redux";
import Header from "../components/Header";

const SpeakerLookup = ({ speakers, passCloseSLU }) => {
  let speakerArr = [
    {
      key: "1",
      speakerId: 100,
      name: "Booth 1",
      about: "some random information",
    },
    {
      key: "2",
      speakerId: 200,
      name: "Booth 2",
      about: "some random information",
    },
    {
      key: "3",
      speakerId: 300,
      name: "Booth 3",
      about: "some random information",
    },
    {
      key: "4",
      speakerId: 400,
      name: "Booth 4",
      about: "some random information",
    },
  ];

  console.log({ speakers });

  return (
    <View>
      <Header />
      <Button title="Close" onPress={passCloseSLU} />
      <FlatList
        data={speakers}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>Company: {item.company}</Text>
            <Text>Title: {item.title}</Text>
            <Text>Linked-in: {item.linkedin}</Text>
            <Text>About: {item.info}</Text>
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  const { speakers } = state;
  return { speakers };
};

export default connect(mapStateToProps)(SpeakerLookup);
