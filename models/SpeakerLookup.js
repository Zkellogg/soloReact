import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import Header from "../components/Header";

const SpeakerLookup = (props) => {
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
  return (
    <View>
      <Header />
      <Button title="Close" onPress={props.passCloseSLU} />
      <FlatList
        data={speakerArr}
        renderItem={({ item }) => (
          <View>
            <Text>Speaker Title: {item.speakerId}</Text>
            <Text>Speaker: {item.name}</Text>
            <Text>Info: {item.about}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SpeakerLookup;
